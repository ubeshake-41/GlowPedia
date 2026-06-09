  import { useState, useRef, useEffect } from 'react';
import { useProModal } from '../contexts/ProModalContext';
import { useAuth } from '../contexts/AuthContext';
import styles from './GlowAIChatPanel.module.css';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function GlowAIChatPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { user } = useAuth();
  const { showProModal } = useProModal();
  const isPro = user?.user_metadata?.role === 'pro';
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Glow AI, your personal skincare assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    if (!isPro) {
      showProModal('Glow AI');
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get user's skin type if available for personalization
      const skinType = user?.user_metadata?.skin_type || 'all skin types';
      
      // Prepare the system prompt with guidelines
      const systemPrompt = `You are Glow AI, a skincare expert for the Glowpedia app. 
      Provide plain English answers that are warm, clear, and gender-neutral.
      Reference Glowpedia wiki pages when possible.
      Personalize responses using the user's skin type (${skinType}) when relevant.
      Keep responses concise but informative.`;
      
       // Make the API call to Anthropic
       const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY || '',
           'anthropic-version': '2023-06-01'
         },
         body: JSON.stringify({
           model: 'claude-sonnet-4-20250514',
           max_tokens: 1000,
           system: systemPrompt,
           messages: [
             {
               role: 'user',
               content: inputValue
             }
           ]
         })
       });
       
       if (!apiResponse.ok) {
         throw new Error(`Anthropic API error: ${apiResponse.status} ${apiResponse.statusText}`);
       }
      
      const data = await apiResponse.json();
      const aiContent = data.content[0]?.text || "I'm having trouble responding right now. Please try again.";
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: aiContent,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }
  };

  // Features available in the Glow AI panel
  const features = [
    { id: 'qna', label: 'Q&A', icon: '💬', description: 'Ask skincare questions' },
    { id: 'scanner', label: 'Scanner', icon: '🔍', description: 'Scan ingredients' },
    { id: 'reviewer', label: 'Reviewer', icon: '📋', description: 'Review routines' },
    { id: 'checker', label: 'Checker', icon: '🧪', description: 'Check products' },
    { id: 'builder', label: 'Builder', icon: '🧩', description: 'Build routines' }
  ];

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.chatPanel}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.aiIcon}>✨</div>
            <div className={styles.headerText}>
              <h2>Glow AI Assistant</h2>
              <p>{isPro ? 'Pro Member' : 'Free Member - Upgrade for full access'}</p>
            </div>
            <button 
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          {/* Feature Tabs */}
          <div className={styles.featureTabs}>
            {features.map(feature => (
              <button 
                key={feature.id}
                className={styles.featureTab}
                onClick={() => !isPro && showProModal('Glow AI Features')}
              >
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureLabel}>{feature.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className={styles.messagesContainer}>
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`${styles.message} ${styles[message.sender]}`}
            >
              <div className={styles.messageContent}>
                {message.content}
              </div>
              <div className={styles.timestamp}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.ai}`}>
              <div className={styles.typingIndicator}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className={styles.inputContainer}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isPro ? "Ask me anything about skincare..." : "Upgrade to Pro for full AI access"}
            className={styles.textInput}
            rows={1}
            disabled={!isPro}
          />
          <button 
            type="submit" 
            className={styles.sendButton}
            disabled={!inputValue.trim() || isLoading || !isPro}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}