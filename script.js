// Twitter/X Clone JavaScript

// Sample tweet data
const sampleTweets = [
    {
        name: "Kago Kgolagano Kola",
        username: "@kagokola",
        avatar: "K",
        time: "2m",
        text: "Just built my Twitter/X clone! 🚀 Learning web development has been an amazing journey. #WebDev #Coding",
        likes: 45,
        retweets: 12,
        replies: 8,
        views: 1200
    },
    {
        name: "Tech News",
        username: "@technews",
        avatar: "T",
        time: "15m",
        text: "🔥 Breaking: New JavaScript framework released! Developers are excited about the new features and performance improvements.",
        likes: 234,
        retweets: 89,
        replies: 45,
        views: 5600
    },
    {
        name: "Web Developer",
        username: "@webdev",
        avatar: "W",
        time: "1h",
        text: "CSS Grid vs Flexbox? Why not both! 🎨 Here's a quick tip: Use Grid for layout, Flexbox for alignment. #CSS #Frontend",
        likes: 567,
        retweets: 234,
        replies: 89,
        views: 12300
    },
    {
        name: "Design Tips",
        username: "@designtips",
        avatar: "D",
        time: "2h",
        text: "The secret to great UI design: Consistency, contrast, and white space. Don't overcrowd your interfaces! ✨",
        likes: 892,
        retweets: 345,
        replies: 123,
        views: 23400
    },
    {
        name: "JavaScript Daily",
        username: "@jsdaily",
        avatar: "J",
        time: "3h",
        text: "Did you know? JavaScript was created in just 10 days by Brendan Eich in 1995. Now it's everywhere! 💻 #JavaScript #History",
        likes: 1234,
        retweets: 567,
        replies: 234,
        views: 45600
    },
    {
        name: "Sarah Johnson",
        username: "@sarahj",
        avatar: "S",
        time: "4h",
        text: "Just deployed my first full-stack app! The feeling when everything works on production is unmatched 🎉 #WomenInTech",
        likes: 567,
        retweets: 123,
        replies: 67,
        views: 8900
    },
    {
        name: "Code Master",
        username: "@codemaster",
        avatar: "C",
        time: "5h",
        text: "Pro tip: Always comment your code. Future you will thank present you! 📝 #Programming #BestPractices",
        likes: 2345,
        retweets: 890,
        replies: 234,
        views: 56700
    },
    {
        name: "Startup Founder",
        username: "@startupfounder",
        avatar: "F",
        time: "6h",
        text: "Raising our Series A round! The journey from garage to office has been incredible. Here's to the next chapter 🚀 #StartupLife",
        likes: 3456,
        retweets: 567,
        replies: 345,
        views: 89200
    },
    {
        name: "Data Scientist",
        username: "@datascience",
        avatar: "D",
        time: "7h",
        text: "Machine learning models are only as good as the data you feed them. Garbage in, garbage out! 🤖 #AI #DataScience",
        likes: 1890,
        retweets: 456,
        replies: 189,
        views: 34500
    },
    {
        name: "Mobile Dev",
        username: "@mobiledev",
        avatar: "M",
        time: "8h",
        text: "React Native vs Flutter? Both are great! Choose based on your team's expertise and project requirements. 📱 #MobileDev",
        likes: 789,
        retweets: 234,
        replies: 123,
        views: 15600
    },
    {
        name: "Cloud Architect",
        username: "@cloudarch",
        avatar: "C",
        time: "9h",
        text: "Serverless architecture changed how we think about scaling. No more managing servers, just code! ☁️ #CloudComputing #AWS",
        likes: 1567,
        retweets: 345,
        replies: 167,
        views: 28900
    },
    {
        name: "UX Researcher",
        username: "@uxresearch",
        avatar: "U",
        time: "10h",
        text: "User testing is not optional. It's the difference between a product people love and one they tolerate. 🧪 #UX #ProductDesign",
        likes: 2345,
        retweets: 678,
        replies: 289,
        views: 45100
    },
    {
        name: "Cyber Security",
        username: "@cybersec",
        avatar: "C",
        time: "11h",
        text: "Two-factor authentication is not optional in 2024. Enable it everywhere you can! 🔒 #CyberSecurity #InfoSec",
        likes: 3456,
        retweets: 890,
        replies: 345,
        views: 67800
    },
    {
        name: "DevOps Engineer",
        username: "@devops",
        avatar: "D",
        time: "12h",
        text: "CI/CD pipelines are the backbone of modern software delivery. Automate everything! 🔄 #DevOps #Automation",
        likes: 1234,
        retweets: 456,
        replies: 234,
        views: 23400
    },
    {
        name: "Open Source",
        username: "@opensource",
        avatar: "O",
        time: "13h",
        text: "Contributing to open source is the best way to learn and give back to the community. Start today! 🌟 #OpenSource",
        likes: 4567,
        retweets: 1234,
        replies: 567,
        views: 89500
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadTweets();
    setupTweetBox();
    setupNavigation();
    setupDarkMode();
    setupLoginModal();
    setupFeedTabs();
    setupProfileTabs();
});

// Load tweets into the timeline
function loadTweets() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    sampleTweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        timeline.appendChild(tweetElement);
    });
}

// Parse counts like "1.2K", "3M", or "45" into integers
function parseCount(str) {
    if (str == null) return NaN;
    const s = String(str).toLowerCase().replace(/,/g, '').trim();
    if (s === '') return NaN;
    if (s.endsWith('k')) return Math.round(parseFloat(s.replace('k','')) * 1000);
    if (s.endsWith('m')) return Math.round(parseFloat(s.replace('m','')) * 1000000);
    const n = parseInt(s, 10);
    return isNaN(n) ? NaN : n;
}

// Format integer counts into compact strings (e.g. 1.2K, 3M)
function formatCount(value) {
    const n = parseCount(value);
    if (!Number.isFinite(n)) return String(value == null ? '' : value);
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(n);
}

// Create a tweet HTML element
function createTweetElement(tweet) {
    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet';
    tweetDiv.innerHTML = `
        <div class="tweet-avatar">${tweet.avatar}</div>
        <div class="tweet-content">
            <div class="tweet-header">
                <span class="tweet-name">${tweet.name}</span>
                <span class="tweet-username">${tweet.username}</span>
                <span class="tweet-time">· ${tweet.time}</span>
            </div>
            <p class="tweet-text">${tweet.text}</p>
            <div class="tweet-actions">
                <div class="tweet-action" data-action="reply">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                    </svg>
                    <span>${formatCount(tweet.replies)}</span>
                </div>
                <div class="tweet-action" data-action="retweet">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                    </svg>
                    <span>${formatCount(tweet.retweets)}</span>
                </div>
                <div class="tweet-action" data-action="like">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.605 3.01.894 1.81.846 4.17-.518 6.67z"/>
                    </svg>
                    <span>${formatCount(tweet.likes)}</span>
                </div>
                <div class="tweet-action" data-action="view">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
                    </svg>
                    <span>${formatCount(tweet.views)}</span>
                </div>
                <div class="tweet-action" data-action="share">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                    </svg>
                </div>
            </div>
        </div>
    `;
    
    // Add click handlers for tweet actions
    const actions = tweetDiv.querySelectorAll('.tweet-action');
    actions.forEach(action => {
            action.addEventListener('click', function(e) {
                e.stopPropagation();
                const actionType = this.getAttribute('data-action');
                handleTweetAction(this, actionType);
            });

            // Keyboard accessibility: allow Enter/Space to trigger actions
            action.setAttribute('tabindex', '0');
            action.setAttribute('role', 'button');
            action.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const actionType = this.getAttribute('data-action');
                    handleTweetAction(this, actionType);
                }
            });
    });
    
    return tweetDiv;
}

// Handle tweet actions (like, retweet, etc.)
function handleTweetAction(element, actionType) {
    const countSpan = element.querySelector('span');
    const svgEl = element.querySelector('svg');

    // Helper: parse counts like "1.2K" or "45" into integers
    function parseCount(str) {
        if (!str) return NaN;
        const s = String(str).toLowerCase().replace(/,/g, '').trim();
        if (s.endsWith('k')) {
            return Math.round(parseFloat(s.replace('k','')) * 1000);
        }
        if (s.endsWith('m')) {
            return Math.round(parseFloat(s.replace('m','')) * 1000000);
        }
        const n = parseInt(s, 10);
        return isNaN(n) ? NaN : n;
    }

    const rawCount = countSpan ? countSpan.textContent : null;
    let count = parseCount(rawCount);

    if (actionType === 'like') {
        element.classList.toggle('liked');

        if (svgEl) {
            if (element.classList.contains('liked')) {
                svgEl.innerHTML = '<path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.605 3.01.894 1.81.846 4.17-.518 6.67z"/>';
            } else {
                svgEl.innerHTML = '<path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.605 3.01.894 1.81.846 4.17-.518 6.67z"/>';
            }
        }

        if (Number.isFinite(count)) {
            count = element.classList.contains('liked') ? count + 1 : Math.max(0, count - 1);
            if (countSpan) countSpan.textContent = formatCount(count);
        }
    } else if (actionType === 'retweet') {
        element.classList.toggle('retweeted');
        if (Number.isFinite(count) && countSpan) {
            count = element.classList.contains('retweeted') ? count + 1 : Math.max(0, count - 1);
            countSpan.textContent = formatCount(count);
        }
    } else {
        // Other actions (reply, view, share) may not have numeric counts.
        // Avoid errors if there's no <span> or if value isn't numeric.
        if (actionType === 'share') {
            // Minimal safe behavior: try Web Share API if available, otherwise copy URL
            if (navigator.share) {
                navigator.share({ title: document.title, url: location.href }).catch(() => {});
            } else {
                // fallback: copy link to clipboard (best-effort)
                if (navigator.clipboard) navigator.clipboard.writeText(location.href).catch(() => {});
            }
        }
    }
}

// Setup tweet box functionality
function setupTweetBox() {
    const tweetInput = document.getElementById('tweetInput');
    const tweetBtn = document.getElementById('tweetBtn');
    const charCount = document.getElementById('charCount');
    const sidebarTweetBtn = document.getElementById('sidebarTweetBtn');
    
    // Auto-resize textarea
    tweetInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        
        // Update character count
        const count = this.value.length;
        charCount.textContent = `${count}/280`;
        
        // Enable/disable tweet button
        if (count > 0 && count <= 280) {
            tweetBtn.disabled = false;
            charCount.classList.remove('warning');
        } else if (count > 280) {
            tweetBtn.disabled = true;
            charCount.classList.add('warning');
        } else {
            tweetBtn.disabled = true;
            charCount.classList.remove('warning');
        }
    });
    
    // Post tweet
    tweetBtn.addEventListener('click', function() {
        const text = tweetInput.value.trim();
        if (text) {
            const newTweet = {
                name: "Kago Kgolagano Kola",
                username: "@kagokola",
                avatar: "K",
                time: "now",
                text: text,
                likes: 0,
                retweets: 0,
                replies: 0,
                views: 0
            };
            
            const timeline = document.getElementById('timeline');
            const tweetElement = createTweetElement(newTweet);
            timeline.insertBefore(tweetElement, timeline.firstChild);
            
            // Reset tweet box
            tweetInput.value = '';
            tweetInput.style.height = 'auto';
            charCount.textContent = '0/280';
            tweetBtn.disabled = true;
        }
    });
    
    // Sidebar tweet button focuses the input
    sidebarTweetBtn.addEventListener('click', function() {
        tweetInput.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Setup navigation between pages
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const homePage = document.getElementById('homePage');
    const explorePage = document.getElementById('explorePage');
    const followingPage = document.getElementById('followingPage');
    const notificationsPage = document.getElementById('notificationsPage');
    const messagesPage = document.getElementById('messagesPage');
    const profilePage = document.getElementById('profilePage');
    
    // Load following tweets and profile tweets
    loadFollowingTweets();
    loadProfileTweets();
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            const page = this.getAttribute('data-page');
            
            // Hide all pages
            homePage.classList.add('hidden');
            homePage.classList.remove('active');
            explorePage.classList.remove('active');
            followingPage.classList.remove('active');
            notificationsPage.classList.remove('active');
            messagesPage.classList.remove('active');
            profilePage.classList.remove('active');
            
            // Show selected page
            if (page === 'home') {
                homePage.classList.remove('hidden');
                homePage.classList.add('active');
            } else if (page === 'explore') {
                explorePage.classList.add('active');
            } else if (page === 'following') {
                followingPage.classList.add('active');
            } else if (page === 'notifications') {
                notificationsPage.classList.add('active');
            } else if (page === 'messages') {
                messagesPage.classList.add('active');
            } else if (page === 'profile') {
                profilePage.classList.add('active');
            }
        });
    });
}

// Load tweets for Following page
function loadFollowingTweets() {
    const followingTimeline = document.getElementById('followingTimeline');
    const followingTweets = sampleTweets.slice(0, 8); // Use first 8 tweets for following
    
    followingTweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        followingTimeline.appendChild(tweetElement);
    });
}

// Load tweets for Profile page
function loadProfileTweets() {
    const profileTimeline = document.getElementById('profileTimeline');
    
    // Create sample tweets for Rethabile's profile
    const profileTweets = [
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "1h",
            text: "Just started my journey in web development! Learning HTML, CSS, and JavaScript. Excited to build amazing things! 🚀 #WebDev #CodingJourney",
            likes: 23,
            retweets: 5,
            replies: 8,
            views: "456"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "3h",
            text: "Working on my first Twitter clone project. It's challenging but so rewarding when things finally work! 💻 #LearningToCode",
            likes: 45,
            retweets: 12,
            replies: 15,
            views: "892"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "1d",
            text: "South Africa has such an amazing tech community! Looking forward to connecting with fellow developers here. 🇿🇦 #TechSA #DeveloperCommunity",
            likes: 67,
            retweets: 23,
            replies: 34,
            views: "1.2K"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "2d",
            text: "Tip of the day: Don't be afraid to ask questions. Every expert was once a beginner. The tech community is here to help! 🤝 #TechTips #BeginnerDeveloper",
            likes: 89,
            retweets: 34,
            replies: 45,
            views: "2.3K"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "3d",
            text: "CSS Grid is amazing! Just learned how to create complex layouts with so little code. Why did I wait so long to learn this? 🎨 #CSS #WebDesign",
            likes: 56,
            retweets: 18,
            replies: 22,
            views: "1.5K"
        }
    ];
    
    profileTweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        profileTimeline.appendChild(tweetElement);
    });
    
    // Load replies, media, and likes
    loadReplies();
    loadMedia();
    loadLikes();
}

// Load replies for Profile page
function loadReplies() {
    const repliesTimeline = document.getElementById('repliesTimeline');
    
    const replies = [
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "2h",
            text: "Replying to @webdev\n\nGreat tip! I've been struggling with CSS layouts and this really helps. Thanks for sharing! 🙏",
            likes: 12,
            retweets: 2,
            replies: 3,
            views: "234"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "5h",
            text: "Replying to @technews\n\nThis is exactly what I needed to hear as a beginner. The journey can be tough but it's worth it! 💪",
            likes: 8,
            retweets: 1,
            replies: 2,
            views: "156"
        },
        {
            name: "Rethabile Vryman",
            username: "@rethabilevryman",
            avatar: "R",
            time: "1d",
            text: "Replying to @designtips\n\nI've been applying these principles to my projects and the difference is incredible. Thank you! ✨",
            likes: 15,
            retweets: 3,
            replies: 4,
            views: "345"
        }
    ];
    
    replies.forEach(reply => {
        const tweetElement = createTweetElement(reply);
        repliesTimeline.appendChild(tweetElement);
    });
}

// Load media for Profile page
function loadMedia() {
    const mediaGrid = document.getElementById('mediaGrid');
    
    const mediaItems = [
        { image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=400&fit=crop", title: "Beautiful sunset" },
        { image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=400&fit=crop", title: "Stunning sunrise" },
        { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop", title: "Peaceful creek" },
        { image: "https://opendrinks.io/img/dalgona-coffee.8936d4e7.jpg", title: "Iced dalgona coffee" },
        { image: "https://www.modernfarmhouseeats.com/wp-content/uploads/2022/01/starbucks-chai-tea-latte-12.jpg", title: "Chai tea latte" },
        { image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=400&fit=crop", title: "Golden sunset" },
        { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", title: "Mountain sunrise" },
        { image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=400&fit=crop", title: "Forest creek" },
        { image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Dirty-chai-latte-b5c00fc.jpg?quality=90&resize=708,643", title: "Spiced chai latte" }
    ];
    
    mediaItems.forEach(item => {
        const mediaElement = document.createElement('div');
        mediaElement.className = 'media-item';
        mediaElement.style.backgroundImage = `url(${item.image})`;
        mediaElement.style.backgroundSize = 'cover';
        mediaElement.style.backgroundPosition = 'center';
        mediaElement.title = item.title;
        mediaGrid.appendChild(mediaElement);
    });
}

// Load liked tweets for Profile page
function loadLikes() {
    const likesTimeline = document.getElementById('likesTimeline');
    
    const likedTweets = [
        {
            name: "Sarah Johnson",
            username: "@sarahj",
            avatar: "S",
            time: "4h",
            text: "Just deployed my first full-stack app! The feeling when everything works on production is unmatched 🎉 #WomenInTech",
            likes: 567,
            retweets: 123,
            replies: 67,
            views: "8.9K"
        },
        {
            name: "Web Developer",
            username: "@webdev",
            avatar: "W",
            time: "1h",
            text: "CSS Grid vs Flexbox? Why not both! 🎨 Here's a quick tip: Use Grid for layout, Flexbox for alignment. #CSS #Frontend",
            likes: 567,
            retweets: 234,
            replies: 89,
            views: "12.3K"
        },
        {
            name: "Code Master",
            username: "@codemaster",
            avatar: "C",
            time: "5h",
            text: "Pro tip: Always comment your code. Future you will thank present you! 📝 #Programming #BestPractices",
            likes: 2345,
            retweets: 890,
            replies: 234,
            views: "56.7K"
        },
        {
            name: "Design Tips",
            username: "@designtips",
            avatar: "D",
            time: "2h",
            text: "The secret to great UI design: Consistency, contrast, and white space. Don't overcrowd your interfaces! ✨",
            likes: 892,
            retweets: 345,
            replies: 123,
            views: "23.4K"
        },
        {
            name: "JavaScript Daily",
            username: "@jsdaily",
            avatar: "J",
            time: "3h",
            text: "Did you know? JavaScript was created in just 10 days by Brendan Eich in 1995. Now it's everywhere! 💻 #JavaScript #History",
            likes: 1234,
            retweets: 567,
            replies: 234,
            views: "45.6K"
        }
    ];
    
    likedTweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        likesTimeline.appendChild(tweetElement);
    });
}

// Setup profile tabs switching
function setupProfileTabs() {
    const tabs = document.querySelectorAll('.profile-tab');
    const contents = document.querySelectorAll('.profile-tab-content');
    
    // Show tweets tab by default
    document.getElementById('tweetsTab').classList.add('active');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content
            contents.forEach(content => content.classList.remove('active'));
            
            // Show selected content
            const tabName = this.getAttribute('data-tab');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
}

// Setup feed tabs (For you / Following)
function setupFeedTabs() {
    const tabs = document.querySelectorAll('.feed-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Setup dark mode toggle (MANUAL FEATURE - No AI help)
function setupDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.innerHTML = '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
        themeText.textContent = 'Light Mode';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.innerHTML = '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
            themeText.textContent = 'Dark Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
            themeText.textContent = 'Light Mode';
        }
    });
}

// Setup login modal (AI-ASSISTED FEATURE 1)
function setupLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginSubmit = document.getElementById('loginSubmit');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('active');
        loginModal.setAttribute('aria-hidden', 'false');
    });
    
    closeModal.addEventListener('click', function() {
        loginModal.classList.remove('active');
        loginModal.setAttribute('aria-hidden', 'true');
    });
    
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
            loginModal.setAttribute('aria-hidden', 'true');
        }
    });
    
    loginSubmit.addEventListener('click', function() {
        const inputs = loginModal.querySelectorAll('.modal-input');
        let filled = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                filled = false;
                input.style.borderColor = '#f4212e';
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });
        
        if (filled) {
            alert('Login successful! (Demo mode)');
            loginModal.classList.remove('active');
            loginModal.setAttribute('aria-hidden', 'true');
            inputs.forEach(input => input.value = '');
        }
    });

    // Make modal closeable via Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginModal.classList.contains('active')) {
            loginModal.classList.remove('active');
            loginModal.setAttribute('aria-hidden', 'true');
        }
        // Close sidebar on Escape
        if (e.key === 'Escape' && leftSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // Mobile Navigation Functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const leftSidebar = document.getElementById('leftSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const bottomNav = document.getElementById('bottomNav');
    const navLabelToggle = document.getElementById('navLabelToggle');

    // Toggle sliding sidebar
    function openSidebar() {
        leftSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    }

    function closeSidebar() {
        leftSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }

    hamburgerMenu.addEventListener('click', openSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Bottom navigation functionality
    const bottomNavItems = bottomNav.querySelectorAll('.bottom-nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Update active state
            bottomNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Navigate to page
            showPage(page);
        });
    });

    // Toggle text labels on bottom navigation
    let showLabels = true;
    navLabelToggle.addEventListener('click', function() {
        showLabels = !showLabels;
        bottomNav.classList.toggle('hide-labels', !showLabels);
        
        // Also toggle labels in sliding sidebar
        const navItems = leftSidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.toggle('icons-only', !showLabels);
        });
    });

    // Sync navigation between sliding sidebar and bottom nav
    const sidebarNavItems = leftSidebar.querySelectorAll('.nav-item');
    sidebarNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Update active state in both navs
            sidebarNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            bottomNavItems.forEach(nav => {
                nav.classList.remove('active');
                if (nav.getAttribute('data-page') === page) {
                    nav.classList.add('active');
                }
            });
            
            // Navigate to page and close sidebar
            showPage(page);
            closeSidebar();
        });
    });
}
