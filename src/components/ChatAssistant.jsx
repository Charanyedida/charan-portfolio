import { useEffect } from 'react'

const ChatAssistant = () => {
  useEffect(() => {
    // Theme Toggle
    const themeToggle = document.createElement('div')
    themeToggle.className = 'theme-toggle'
    themeToggle.innerHTML = '🌓'
    document.body.appendChild(themeToggle)

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode')
      themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌓'
      // Note: localStorage not available in Claude.ai environment
      // localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light')
    })

    // Note: Theme persistence disabled for Claude.ai compatibility
    // if (localStorage.getItem('theme') === 'dark') {
    //   document.body.classList.add('dark-mode')
    //   themeToggle.innerHTML = '☀️'
    // }

    return () => {
      if (document.body.contains(themeToggle)) {
        document.body.removeChild(themeToggle)
      }
    }
  }, [])

  useEffect(() => {
    // Chat Assistant functionality
    
    class ChatAssistant {
      constructor() {
        this.apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
        this.apiUrl = 'https://openrouter.ai/api/v1/chat/completions'
        this.model = 'google/gemma-2-9b-it:free'
        this.isOpen = false
        this.isTyping = false
        this.createChatInterface()
        this.setupSystemPrompt()
      }

      createChatInterface() {
        // Create chat toggle button
        const chatToggle = document.createElement('button')
        chatToggle.className = 'chat-toggle'
        chatToggle.innerHTML = '🤖'
        chatToggle.id = 'chatToggle'
        document.body.appendChild(chatToggle)

        // Create chat container
        const chatContainer = document.createElement('div')
        chatContainer.className = 'chat-container'
        chatContainer.id = 'chatContainer'
        chatContainer.innerHTML = `
          <div class="chat-header">
            <h3 class="chat-title">Chat with Charan's AI</h3>
            <p class="chat-subtitle">Ask me anything about Charan!</p>
            <button class="chat-close" id="chatClose">×</button>
          </div>
          <div class="chat-messages" id="chatMessages">
            <div class="welcome-message">
              👋 Hi! I'm Charan's AI assistant. Ask me anything about his skills, projects, or experience!
            </div>
          </div>
          <div class="chat-input-container">
            <div class="chat-input-wrapper">
              <textarea 
                class="chat-input" 
                id="chatInput" 
                placeholder="Ask me anything..."
                rows="1"
              ></textarea>
              <button class="chat-send" id="chatSend">→</button>
            </div>
            <div class="error-message" id="errorMessage"></div>
          </div>
        `
        document.body.appendChild(chatContainer)

        this.initializeElements()
        this.attachEventListeners()
      }

      initializeElements() {
        this.chatToggle = document.getElementById('chatToggle')
        this.chatContainer = document.getElementById('chatContainer')
        this.chatClose = document.getElementById('chatClose')
        this.chatMessages = document.getElementById('chatMessages')
        this.chatInput = document.getElementById('chatInput')
        this.chatSend = document.getElementById('chatSend')
        this.errorMessage = document.getElementById('errorMessage')
      }

      attachEventListeners() {
        this.chatToggle.addEventListener('click', () => this.toggleChat())
        this.chatClose.addEventListener('click', () => this.closeChat())
        this.chatSend.addEventListener('click', () => this.sendMessage())
        
        this.chatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            this.sendMessage()
          }
        })

        this.chatInput.addEventListener('input', () => {
          this.adjustTextareaHeight()
          this.clearError()
        })
      }

      setupSystemPrompt() {
        this.systemPrompt = `You are Charan Yedida's personal AI assistant integrated into his portfolio website. 
        
        IMPORTANT: Please format your responses in clean, readable text without excessive markdown. Use simple formatting:
        - Use line breaks for paragraphs
        - Use dashes (-) for simple lists when needed
        - Avoid excessive bold, italic, or complex markdown
        - Keep responses conversational and natural
        
        Here's what you know about Charan:
        - He's a Computer Science student
        - He's passionate about web development, machine learning, and photography
        - His skills include: Web Development (React, Next.js, Node.js), Machine Learning (TensorFlow, PyTorch, scikit-learn), Photography
        - He has completed various projects including NxtWatch, Nxt Trendz, QuizMaster, and more
        - His email is online936936@gmail.com
        - He describes himself as: "Developer. Engineer. Photographer."
        
        Be conversational, engaging, and helpful. Help visitors understand what Charan can offer and suggest ways to contact him for collaborations.`
      }

      toggleChat() {
        if (this.isOpen) {
          this.closeChat()
        } else {
          this.openChat()
        }
      }

      openChat() {
        this.isOpen = true
        this.chatContainer.classList.add('active')
        this.chatToggle.textContent = '×'
        setTimeout(() => this.chatInput.focus(), 300)
      }

      closeChat() {
        this.isOpen = false
        this.chatContainer.classList.remove('active')
        this.chatToggle.textContent = '🤖'
      }

      adjustTextareaHeight() {
        this.chatInput.style.height = 'auto'
        this.chatInput.style.height = Math.min(this.chatInput.scrollHeight, 100) + 'px'
      }

      clearError() {
        this.errorMessage.textContent = ''
      }

      showError(message) {
        this.errorMessage.textContent = message
        setTimeout(() => this.clearError(), 5000)
      }

      // Improved text formatting function
      formatResponse(text) {
        // Clean up the response while preserving readability
        return text
          // Remove triple backticks and code blocks
          .replace(/```[\s\S]*?```/g, '')
          .replace(/`{1,2}([^`]+)`{1,2}/g, '$1')
          
          // Convert markdown headers to simple text with line breaks
          .replace(/#{1,6}\s*(.+)/g, '\n$1\n')
          
          // Convert bold/italic to plain text but preserve the content
          .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
          .replace(/_{1,3}([^_]+)_{1,3}/g, '$1')
          
          // Clean up list formatting - convert to simple dashes
          .replace(/^\s*[\*\-\+]\s+/gm, '- ')
          .replace(/^\s*\d+\.\s+/gm, '- ')
          
          // Clean up excessive newlines but preserve paragraph breaks
          .replace(/\n{3,}/g, '\n\n')
          
          // Remove any remaining markdown artifacts
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          
          // Clean up whitespace
          .trim()
      }

      async sendMessage() {
        const message = this.chatInput.value.trim()
        if (!message || this.isTyping) return

        this.addMessage(message, 'user')
        this.chatInput.value = ''
        this.adjustTextareaHeight()
        this.clearError()

        this.isTyping = true
        this.chatSend.disabled = true
        this.showTypingIndicator()

        try {
          const response = await this.callAPI(message)
          this.hideTypingIndicator()
          const formattedResponse = this.formatResponse(response)
          this.addMessage(formattedResponse, 'assistant')
        } catch (error) {
          this.hideTypingIndicator()
          this.showError('Sorry, I encountered an error. Please try again.')
          console.error('Chat error:', error)
        } finally {
          this.isTyping = false
          this.chatSend.disabled = false
        }
      }

      async callAPI(userMessage) {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${this.apiKey}`,
            "HTTP-Referer": window.location.href,
            "X-Title": "Charan Yedida Portfolio",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "model": this.model,
            "messages": [
              { "role": "system", "content": this.systemPrompt },
              { "role": "user", "content": userMessage }
            ],
            "max_tokens": 500,
            "temperature": 0.7
          })
        })
        if (!this.apiKey) {
        console.warn('❌ Missing API key from env. Check .env.local and Vite config.')
      }else{
        console.log('✅ API key is set correctly')
      }


        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`)
        }
        
        const data = await response.json()
        return data.choices[0].message.content
      }

      // Improved message display function
      addMessage(content, sender) {
        const messageDiv = document.createElement('div')
        messageDiv.className = `message ${sender}`
        
        // Handle line breaks properly in the message
        if (sender === 'assistant') {
          // Split content by line breaks and create proper paragraphs
          const paragraphs = content.split('\n\n').filter(p => p.trim())
          
          if (paragraphs.length > 1) {
            // Multiple paragraphs - create structured content
            messageDiv.innerHTML = paragraphs
              .map(paragraph => {
                // Handle simple lists
                if (paragraph.includes('\n- ')) {
                  const parts = paragraph.split('\n- ')
                  const intro = parts[0].trim()
                  const listItems = parts.slice(1)
                  
                  let html = intro ? `<p>${intro}</p>` : ''
                  if (listItems.length > 0) {
                    html += '<div class="message-list">'
                    listItems.forEach(item => {
                      html += `<div class="list-item">• ${item.trim()}</div>`
                    })
                    html += '</div>'
                  }
                  return html
                } else {
                  return `<p>${paragraph.trim()}</p>`
                }
              })
              .join('')
          } else {
            // Single paragraph - check for simple lists
            if (content.includes('- ')) {
              const lines = content.split('\n')
              let html = ''
              let inList = false
              
              lines.forEach(line => {
                line = line.trim()
                if (line.startsWith('- ')) {
                  if (!inList) {
                    html += '<div class="message-list">'
                    inList = true
                  }
                  html += `<div class="list-item">• ${line.substring(2)}</div>`
                } else if (line) {
                  if (inList) {
                    html += '</div>'
                    inList = false
                  }
                  html += `<p>${line}</p>`
                }
              })
              
              if (inList) {
                html += '</div>'
              }
              
              messageDiv.innerHTML = html
            } else {
              messageDiv.textContent = content
            }
          }
        } else {
          messageDiv.textContent = content
        }
        
        this.chatMessages.appendChild(messageDiv)
        this.scrollToBottom()
      }

      showTypingIndicator() {
        const typingDiv = document.createElement('div')
        typingDiv.className = 'message typing'
        typingDiv.id = 'typingIndicator'
        typingDiv.innerHTML = `
          <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        `
        this.chatMessages.appendChild(typingDiv)
        this.scrollToBottom()
      }

      hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator')
        if (typingIndicator) {
          typingIndicator.remove()
        }
      }

      scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight
      }
    }

    // Initialize chat assistant
    const chatAssistant = new ChatAssistant()

    return () => {
      // Cleanup chat elements
      const chatToggle = document.getElementById('chatToggle')
      const chatContainer = document.getElementById('chatContainer')
      if (chatToggle) document.body.removeChild(chatToggle)
      if (chatContainer) document.body.removeChild(chatContainer)
    }
  }, [])

  return null
}

export default ChatAssistant