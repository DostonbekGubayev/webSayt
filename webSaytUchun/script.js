// Ma'lumotlar
const courses = [
    {
        id: 1,
        title: "KIMYO",
        description: "DTM, Milliy Sertifikat, Olimpiada va boshqa yo'nalishlarni tez va oson o'rganing.",
        duration: "8",
        price: "400 000",
        students: 120,
        image: "./pictures/chemistry.png"
    },
    {
        id: 2,
        title: "BIOLOGIYA",
        description: "DTM, Milliy Sertifikat, Olimpiada va boshqa yo'nalishlarni tez va oson o'rganing.",
        duration: "8",
        price: "400 000",
        students: 95,
        image: "./pictures/biology.png"
    },
    {
        id: 3,
        title: "Ona tili va Adabiyot",
        description: "DTM, Milliy Sertifikat, Gramatika va boshqa yo'nalishlarni tez va oson o'rganing.",
        duration: "6",
        price: "350 000",
        students: 85,
        image: "./pictures/ona.png"
    },
   
    {
        id: 4,
        title: "Ingliz Tili",
        description: "Boshlang'ichdan IELTS darajasigacha bo'lgan ingliz tili kurslari.",
        duration: "10",
        price: "400 000",
        students: 150,
        image: "./pictures/english.png"
        
    },
     {
        id: 5,
        title: "Rus Tili",
        description: "Gramatika, So'zlashuv, DTM, va Migrtsiya savol javoblari uchun tayyorlov.",
        duration: "8",
        price: "350 000",
        students: 85,
        image: "./pictures/russian.png"
    },
    {
        id: 6,
        title: "Matematika",
        description: "DTM, Milliy Sertifikat Maktab dasturi, Prezident Maktabiga tayyorlov va oliy matematika kurslari.",
        duration: "9",
        price: "400 000",
        students: 130,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
     {
        id: 7,
        title: "Tarix va Huquq asoslari",
        description: "DTM, Milliy Sertifikat uchun qisqa muddat ichida tayyorlaning!.",
        duration: "8",
        price: "350 000",
        students: 70,
        image: "./pictures/history.png"
    },
     {
        id: 8,
        title: "Backend Dasturlash",
        description: "Node.js, Python, Django, ma'lumotlar bazasi va server dasturlash.",
        duration: "8",
        price: "420 000",
        students: 85,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        title: "Grafik Dizayn",
        description: "Photoshop, Illustrator, Figma va boshqa dizayn dasturlarini o'rganing.",
        duration: "5",
        price: "400 000",
        students: 95,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        title: "Mobil Ilovalar",
        description: "Flutter va React Native yordamida mobil ilovalar yaratish.",
        duration: "7",
        price: "600 000",
        students: 70,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        title: "Data Science",
        description: "Ma'lumotlar tahlili, mashinali o'rganish va sun'iy intellekt.",
        duration: "8",
        price: "550 000",
        students: 60,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        title: "SMM va Marketing",
        description: "Ijtimoiy tarmoqlar marketingi va kontent yaratish.",
        duration: "4",
        price: "400 000",
        students: 150,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const testimonials = [
    {
        text: "Dostonbek Academy'da 6 oylik CEFR kurslarini tamomladim xozirda B2 daraja sohibiman buning uchun Dostonbek Academy Ustozlariga o'z minnatdorligimni bildiraman.",
        author: "Akmaljon Qodirov",
        role: "Jahon tillar Universiteti talabasi",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        text: "Ingliz tili kursi mening hayotimni o'zgartirdi. IELTS imtihonidan 7.5 ball to'pladim va hozirda chet elda o'qiyman. O'qituvchilarimning sabr-toqati va bilimlari ajoyib.",
        author: "Dilfuza Rahimova",
        role: "Talaba (AQSh)",
        image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        text: "Matematika kursi yordamida oliy ta'lim muassasasiga kirish imtihonlarida yuqori natijaga erishdim. O'qituvchilar murakkab masalalarni oddiy va tushunarli tarzda tushuntirishadi.",
        author: "Javohir Tursunov",
        role: "Talaba (TATU)",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        text: "Men Kimyo va Biologiya kurslarini tamomlab Milliy Sertifikat imtihonlarida ikkala fandan ham A darajani qo'lga kiritdim Xozirda Tibbiyot Insituti talabasiman. Ustozlarimga rahmat aytaman",
        author: "Sevinch Karimova",
        role: "Tibbiyot insituti talabasi",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

        {
        text: "Men Ona tili va Adabiyot kurslarini tamomlab Milliy Sertifikat imtihonlarida ikkala fandan ham A darajani qo'lga kiritdim Xozirda SamDU talabasiman. Ustozlarimga rahmat aytaman",
        author: "Sevinch Karimova",
        role: "SamDU talabasi",
        image: "./students/muni.jpg"
    }
];

const achievements = [
    {
        icon: "fas fa-trophy",
        title: "Eng yaxshi o'quv markazi",
        description: "2023 yilda 'Yilning eng yaxshi o'quv markazi' nominatsiyasi g'olibi"
    },
    {
        icon: "fas fa-medal",
        title: "Sertifikatlangan o'qituvchilar",
        description: "Barcha o'qituvchilarimiz xalqaro sertifikatlarga ega"
    },
    {
        icon: "fas fa-graduation-cap",
        title: "100% natija",
        description: "So'nggi 3 yil ichida bitiruvchilarimizning 100% Sertifikat olishdi va Oliygohga kirishdi"
    },
    {
        icon: "fas fa-handshake",
        title: "Hamkor Universitetlar",
        description: "10 dan ortiq Universitetlar bilan hamkorlikda ishlaymiz!"
    }
];

// DOM elementlari
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const registerBtn = document.getElementById('registerBtn');
const viewCoursesBtn = document.getElementById('viewCourses');
const registrationModal = document.getElementById('registrationModal');
const closeModal = document.getElementById('closeModal');
const closePurchaseModal = document.getElementById('closePurchaseModal');
const purchaseModal = document.getElementById('purchaseModal');
const coursesContainer = document.getElementById('coursesContainer');
const testimonialSlider = document.getElementById('testimonialSlider');
const sliderControls = document.getElementById('sliderControls');
const achievementsContainer = document.getElementById('achievementsContainer');
const contactForm = document.getElementById('contactForm');
const courseTitle = document.getElementById('courseTitle');

// Statistika elementlari
const studentsCount = document.getElementById('studentsCount');
const coursesCount = document.getElementById('coursesCount');
const teachersCount = document.getElementById('teachersCount');
const successRate = document.getElementById('successRate');

// O'zgaruvchilar
let selectedCourse = null;
let currentTestimonial = 0;
let testimonialInterval;

// Mobil menyuni ochish/yopish
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Modal ochish/yopish
registerBtn.addEventListener('click', () => {
    registrationModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    registrationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

closePurchaseModal.addEventListener('click', () => {
    purchaseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Modal tashqarisini bosganda yopish
window.addEventListener('click', (e) => {
    if (e.target === registrationModal) {
        registrationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === purchaseModal) {
        purchaseModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Kurslarni sahifaga yuklash (faqat 6 tasi)
function loadCourses() {
    if (!coursesContainer) return;
    
    coursesContainer.innerHTML = '';
    
    // Faqat birinchi 6 ta kursni ko'rsatish
    const displayedCourses = courses.slice(0, 6);
    
    displayedCourses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.index = index;
        
        courseCard.innerHTML = `
            <div class="course-image" style="background-image: url('${course.image}');">
                <div class="course-price">${course.price} so'm</div>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="far fa-clock"></i> ${course.duration} oy</span>
                    <span><i class="fas fa-users"></i> ${course.students} o'quvchi</span>
                </div>
                <button class="buy-button" data-id="${course.id}">Kursga yozilish</button>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
    
    // Kurs kartalariga animatsiya qo'shish
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 150);
    });
    
    // Sotib olish tugmalariga event listener qo'shish
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const courseId = parseInt(e.target.dataset.id);
            selectedCourse = courses.find(course => course.id === courseId);
            
            // Modalni to'ldirish
            courseTitle.textContent = `${selectedCourse.title} kursini sotib olish`;
            
            // Modalni ochish
            purchaseModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
}

// O'quvchi fikrlarini yuklash
function loadTestimonials() {
    if (!testimonialSlider) return;
    
    testimonialSlider.innerHTML = '';
    sliderControls.innerHTML = '';
    
    // Slaydlarni yaratish
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.dataset.index = index;
        
        slide.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-text">
                    "${testimonial.text}"
                </div>
                <div class="testimonial-author">
                    <div class="author-img" style="background-image: url('${testimonial.image}');"></div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
        
        testimonialSlider.appendChild(slide);
        
        // Slider nuqtalarini yaratish
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        sliderControls.appendChild(dot);
        
        // Nuqtalarga event listener qo'shish
        dot.addEventListener('click', () => {
            goToTestimonial(index);
        });
    });
    
    // Avtomatik sliderni boshlash
    startTestimonialSlider();
}

// Testimonial sliderini boshlash
function startTestimonialSlider() {
    clearInterval(testimonialInterval);
    
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        goToTestimonial(currentTestimonial);
    }, 5000);
}

// Belgilangan testimonialga o'tish
function goToTestimonial(index) {
    currentTestimonial = index;
    
    // Slaydni o'zgartirish
    testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
    
    // Nuqtalarni yangilash
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Intervalni qayta boshlash
    clearInterval(testimonialInterval);
    startTestimonialSlider();
}

// Yutuqlarni yuklash
function loadAchievements() {
    if (!achievementsContainer) return;
    
    achievementsContainer.innerHTML = '';
    
    achievements.forEach((achievement, index) => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.dataset.index = index;
        
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        `;
        
        achievementsContainer.appendChild(achievementCard);
    });
    
    // Yutuq kartalariga animatsiya qo'shish
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 150);
    });
}

// Statistika animatsiyasi
function animateStats() {
    let students = 0;
    let coursesNum = 0;
    let teachers = 0;
    let success = 0;
    
    const studentsTotal = 900;
    const coursesTotal = courses.length;
    const teachersTotal = 25;
    const successTotal = 94;
    
    const interval = setInterval(() => {
        students += 20;
        coursesNum += 0.5;
        teachers += 0.5;
        success += 0.5;
        
        if (students > studentsTotal) students = studentsTotal;
        if (coursesNum > coursesTotal) coursesNum = coursesTotal;
        if (teachers > teachersTotal) teachers = teachersTotal;
        if (success > successTotal) success = successTotal;
        
        studentsCount.textContent = Math.floor(students);
        coursesCount.textContent = Math.floor(coursesNum);
        teachersCount.textContent = Math.floor(teachers);
        successRate.textContent = `${Math.floor(success)}%`;
        
        if (students === studentsTotal && 
            coursesNum === coursesTotal && 
            teachers === teachersTotal && 
            success === successTotal) {
            clearInterval(interval);
        }
    }, 30);
}

// Scroll animatsiyalari
function handleScrollAnimations() {
    // Kurs kartalari uchun
    const courseCards = document.querySelectorAll('.course-card:not(.animate)');
    courseCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.classList.add('animate');
        }
    });
    
    // Yutuq kartalari uchun
    const achievementCards = document.querySelectorAll('.achievement-card:not(.animate)');
    achievementCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.classList.add('animate');
        }
    });
    
    // Statistika uchun
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (statsTop < windowHeight - 100 && statsTop > 0) {
            if (!statsSection.classList.contains('animated')) {
                statsSection.classList.add('animated');
                animateStats();
            }
        }
    }
}

// Formalar uchun event listenerlar
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Xabaringiz qabul qilindi. Tez orada siz bilan bog\'lanamiz.');
        contactForm.reset();
    });
}

// Tugmalarga event listenerlar
if (viewCoursesBtn) {
    viewCoursesBtn.addEventListener('click', () => {
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Navigatsiya linklariga smooth scroll qo'shish
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Mobil menyuni yopish
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Sahifa yuklanganda ishga tushadigan funksiyalar
window.addEventListener('load', () => {
    loadCourses();
    loadTestimonials();
    loadAchievements();
    handleScrollAnimations();
});

// Scroll qilganda animatsiyalarni ishga tushirish
window.addEventListener('scroll', handleScrollAnimations);

// Sayt yuklanishida statistika ko'rsatkichlari
if (coursesCount) {
    coursesCount.textContent = courses.length;
}

// Mobil menyuni yopish uchun sahifaning boshqa joyiga bosganda
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !e.target.closest('nav') && 
        !e.target.closest('.mobile-menu-btn')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
// Widget yuklash funksiyasi
function loadMoyklassWidget(containerId) {
    // Avval barcha containerlardan SiteWidgetMoyklass98205 ID sini olib tashlaymiz
    document.querySelectorAll('[id="SiteWidgetMoyklass98205"]').forEach(el => {
        el.removeAttribute('id');
    });
    
    // Hozirgi container ga SiteWidgetMoyklass98205 ID sini beramiz
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.id = 'SiteWidgetMoyklass98205';
    
    // Agar widget skripti yuklanmagan bo'lsa, yuklaymiz
    if (!window.MoyklassWidgetLoaded) {
        const script = document.createElement('script');
        script.src = 'https://app.moyklass.com/api/site/widget/?id=01lkR8cS5vlfxYmvnjjJvLMN37Yp5MZJ2PQQ';
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.onload = function() {
            window.MoyklassWidgetLoaded = true;
            console.log('MoyKlass widget skripti yuklandi');
        };
        script.onerror = function() {
            console.error('MoyKlass widget skripti yuklanmadi');
        };
        document.body.appendChild(script);
    } else {
        // Agar allaqachon yuklangan bo'lsa, widgetni qayta render qilishga urinamiz
        if (window.MoyklassWidget && typeof window.MoyklassWidget.init === 'function') {
            window.MoyklassWidget.init();
        }
    }
}

// Modal ochilganda widget yuklash
document.getElementById('registerBtn').addEventListener('click', function() {
    loadMoyklassWidget('widgetContainerReg');
});

// Sotib olish modalini ochganda widget yuklash
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-button')) {
        // ... kursni tanlash kodi ...
        loadMoyklassWidget('widgetContainerPurchase');
    }
});

// Sahifa yuklanganda, aloqa bo'limidagi widgetni yuklash (agar ko'rinadigan bo'lsa)
window.addEventListener('load', function() {
    // Aloqa bo'limi ko'rinadigan bo'lsa, unda widget yuklash
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                loadMoyklassWidget('widgetContainerContact');
                observer.unobserve(contactSection);
            }
        });
        observer.observe(contactSection);
    }
});








// ========== VIDEO SLIDER FUNKSIYALARI ==========








// Video slider elementlari
// ========== VIDEO SLIDER TO'LIQ ISHLASHI KERAK ==========

document.addEventListener('DOMContentLoaded', function() {
    console.log('Video Slider yuklanmoqda...');
    
    // Elementlarni tanlash
    const videoSlider = document.getElementById('videoSlider');
    const videoCounter = document.getElementById('videoCounter');
    const prevVideoBtn = document.getElementById('prevVideo');
    const nextVideoBtn = document.getElementById('nextVideo');
    const videoDots = document.querySelectorAll('.video-dot');
    const videoSlides = document.querySelectorAll('.video-slide');
    
    // O'zgaruvchilar
    let currentVideoSlide = 0;
    let videoInterval;
    const totalVideos = videoSlides.length;
    
    // Video player elementlarini tanlash
    const playButtons = document.querySelectorAll('.play-button');
    const videos = document.querySelectorAll('.video-wrapper video');
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    
    console.log(`Topildi: ${videoSlides.length} slayd, ${videos.length} video, ${playButtons.length} play button`);
    
    // 1. VIDEO SLIDER NI ISHGA TUSHIRISH
    function initVideoSlider() {
        console.log('Video slider ishga tushirilmoqda...');
        
        // Boshlang'ich holat
        goToVideoSlide(0);
        
        // Auto slide boshlash
        startAutoSlide();
        
        // Video playerlarni ishga tushirish
        initVideoPlayers();
    }
    
    // 2. VIDEO PLAYERLARNI ISHGA TUSHIRISH
    function initVideoPlayers() {
        console.log('Video playerlar ishga tushirilmoqda...');
        
        // Har bir video uchun
        videos.forEach((video, index) => {
            console.log(`Video ${index + 1} yuklanmoqda: ${video.id}`);
            
            // VIDEO YUKLANGANDA
            video.addEventListener('loadeddata', function() {
                console.log(`${this.id} yuklandi`);
                const wrapper = this.closest('.video-wrapper');
                if (wrapper) {
                    wrapper.classList.remove('video-loading');
                    this.style.opacity = '1';
                }
            });
            
            // VIDEO YUKLANMOQDA
            video.addEventListener('loadstart', function() {
                console.log(`${this.id} yuklanmoqda...`);
                const wrapper = this.closest('.video-wrapper');
                if (wrapper) {
                    wrapper.classList.add('video-loading');
                }
            });
            
            // VIDEO XATOSI
            video.addEventListener('error', function(e) {
                console.error(`${this.id} yuklanmadi:`, e);
                const wrapper = this.closest('.video-wrapper');
                const button = wrapper?.querySelector('.play-button');
                
                if (wrapper) {
                    wrapper.classList.add('video-error');
                    wrapper.classList.remove('video-loading');
                }
                
                if (button) {
                    button.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
                    button.style.background = 'rgba(220, 38, 38, 0.9)';
                    
                    setTimeout(() => {
                        if (video.paused) {
                            button.innerHTML = '<i class="fas fa-play"></i>';
                            button.style.background = '';
                        }
                    }, 2000);
                }
                
                // Agar video yuklanmasa, poster ko'rinishini ta'minlash
                if (wrapper) {
                    wrapper.style.backgroundImage = `url('${video.getAttribute('poster')}')`;
                    wrapper.style.backgroundSize = 'cover';
                    wrapper.style.backgroundPosition = 'center';
                }
            });
            
            // VIDEO O'YNAGANDAN KEYIN
            video.addEventListener('play', function() {
                console.log(`${this.id} oynayapti`);
                const button = this.closest('.video-wrapper')?.querySelector('.play-button');
                if (button) {
                    button.innerHTML = '<i class="fas fa-pause"></i>';
                    button.classList.add('playing');
                }
                
                // Slider autoplay ni to'xtatish
                clearInterval(videoInterval);
                
                // Boshqa videolarni to'xtatish
                pauseOtherVideos(this.id);
            });
            
            // VIDEO TO'XTAGANDA
            video.addEventListener('pause', function() {
                console.log(`${this.id} toxtadi`);
                const button = this.closest('.video-wrapper')?.querySelector('.play-button');
                if (button && !this.ended) {
                    button.innerHTML = '<i class="fas fa-play"></i>';
                    button.classList.remove('playing');
                }
            });
            
            // VIDEO TUGAGANDA
            video.addEventListener('ended', function() {
                console.log(`${this.id} tugadi`);
                const button = this.closest('.video-wrapper')?.querySelector('.play-button');
                if (button) {
                    button.innerHTML = '<i class="fas fa-play"></i>';
                    button.classList.remove('playing');
                }
                
                // Video boshiga qaytarish
                this.currentTime = 0;
                
                // Slider autoplay ni qayta boshlash
                startAutoSlide();
            });
            
            // VIDEO VAQT O'ZGARGANDA
            video.addEventListener('timeupdate', function() {
                // Console da progress ko'rsatish (test uchun)
                const percent = (this.currentTime / this.duration) * 100;
                if (percent > 95) {
                    console.log(`${this.id} yaqinlashmoqda...`);
                }
            });
        });
        
        // PLAY BUTTONLAR UCHUN EVENT LISTENER
        playButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const videoId = this.getAttribute('data-video');
                const video = document.getElementById(videoId);
                
                if (video) {
                    console.log(`Play button bosildi: ${videoId}`);
                    toggleVideoPlay(video, this);
                } else {
                    console.error(`Video topilmadi: ${videoId}`);
                }
            });
        });
        
        // VIDEO WRAPPERLAR UCHUN EVENT LISTENER (backup)
        videoWrappers.forEach(wrapper => {
            wrapper.addEventListener('click', function(e) {
                // Agar play button bosilgan bo'lsa, chiqib ket
                if (e.target.classList.contains('play-button') || 
                    e.target.closest('.play-button')) {
                    return;
                }
                
                const video = this.querySelector('video');
                const button = this.querySelector('.play-button');
                
                if (video && button) {
                    console.log(`Video wrapper bosildi: ${video.id}`);
                    toggleVideoPlay(video, button);
                }
            });
        });
        
        console.log('Video playerlar muvaffaqiyatli yuklandi');
    }
    
    // 3. VIDEO PLAY/PAUSE FUNKSIYASI
    function toggleVideoPlay(videoElement, buttonElement) {
        if (videoElement.paused || videoElement.ended) {
            // Video o'ynatish
            console.log(`${videoElement.id} oynatilmoqda...`);
            
            const playPromise = videoElement.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log(`${videoElement.id} muvaffaqiyatli oynayapti`);
                }).catch(error => {
                    console.error(`${videoElement.id} oynatishda xatolik:`, error);
                    
                    // Xatoni ko'rsatish
                    buttonElement.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
                    buttonElement.style.background = 'rgba(245, 158, 11, 0.9)';
                    
                    setTimeout(() => {
                        if (videoElement.paused) {
                            buttonElement.innerHTML = '<i class="fas fa-play"></i>';
                            buttonElement.style.background = '';
                        }
                    }, 2000);
                });
            }
        } else {
            // Video to'xtatish
            console.log(`${videoElement.id} toxtatilmoqda...`);
            videoElement.pause();
        }
    }
    
    // 4. BOSHQA VIDEOLARNI TO'XTATISH
    function pauseOtherVideos(currentVideoId) {
        videos.forEach(video => {
            if (video.id !== currentVideoId && !video.paused) {
                video.pause();
                video.currentTime = 0;
                
                const button = video.closest('.video-wrapper')?.querySelector('.play-button');
                if (button) {
                    button.innerHTML = '<i class="fas fa-play"></i>';
                    button.classList.remove('playing');
                }
            }
        });
    }
    
    // 5. BARCHA VIDEOLARNI TO'XTATISH
    function pauseAllVideos() {
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });
        
        playButtons.forEach(button => {
            button.innerHTML = '<i class="fas fa-play"></i>';
            button.classList.remove('playing');
        });
    }
    
    // 6. VIDEO SLIDER NAVIGATSIYASI
    function goToVideoSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalVideos) {
            console.error(`Noto'g'ri slide index: ${slideIndex}`);
            return;
        }
        
        console.log(`Slide o'zgarmoqda: ${currentVideoSlide} -> ${slideIndex}`);
        
        currentVideoSlide = slideIndex;
        
        // Slider pozitsiyasini o'zgartirish
        if (videoSlider) {
            videoSlider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
        
        // Slaydlarni yangilash
        videoSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideIndex);
        });
        
        // Nuqtalarni yangilash
        videoDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
        
        // Video counter yangilash
        if (videoCounter) {
            videoCounter.textContent = `${slideIndex + 1}/${totalVideos}`;
        }
        
        // Faol videoni ko'rsatish
        showCurrentVideo();
    }
    
    // 7. FAOL VIDEONI KO'RSATISH
    function showCurrentVideo() {
        // Barcha videolarni yashirish
        videoSlides.forEach((slide, index) => {
            const videoWrapper = slide.querySelector('.video-wrapper');
            if (videoWrapper) {
                videoWrapper.style.opacity = index === currentVideoSlide ? '1' : '0';
                videoWrapper.style.visibility = index === currentVideoSlide ? 'visible' : 'hidden';
                videoWrapper.style.position = index === currentVideoSlide ? 'relative' : 'absolute';
            }
        });
        
        // Faol videoni yuklash
        const activeSlide = videoSlides[currentVideoSlide];
        const video = activeSlide?.querySelector('video');
        
        if (video) {
            console.log(`Faol video: ${video.id}`);
            
            // Video yuklanmagan bo'lsa, yuklash
            if (video.readyState < 2) {
                video.load();
            }
            
            // Video elementini ko'rsatish
            video.style.opacity = '1';
            video.style.visibility = 'visible';
        }
    }
    
    // 8. KEYINGI SLIDE
    function nextVideo() {
        const nextSlide = (currentVideoSlide + 1) % totalVideos;
        goToVideoSlide(nextSlide);
        
        // Videolarni to'xtatish
        pauseAllVideos();
    }
    
    // 9. OLDINGI SLIDE
    function prevVideo() {
        const prevSlide = (currentVideoSlide - 1 + totalVideos) % totalVideos;
        goToVideoSlide(prevSlide);
        
        // Videolarni to'xtatish
        pauseAllVideos();
    }
    
    // 10. AUTO SLIDE BOSHLASH
    function startAutoSlide() {
        clearInterval(videoInterval);
        
        // Faqat hech qanday video o'ynamayotgan bo'lsa
        let anyVideoPlaying = false;
        videos.forEach(video => {
            if (!video.paused) anyVideoPlaying = true;
        });
        
        if (!anyVideoPlaying) {
            videoInterval = setInterval(() => {
                nextVideo();
            }, 8000); // 8 soniyada
        }
    }
    
    // 11. EVENT LISTENERLARNI BIRIKTIRISH
    if (prevVideoBtn) {
        prevVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevVideo();
            startAutoSlide();
        });
    }
    
    if (nextVideoBtn) {
        nextVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextVideo();
            startAutoSlide();
        });
    }
    
    // NUQTALAR UCHUN
    videoDots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToVideoSlide(index);
            pauseAllVideos();
            startAutoSlide();
        });
    });
    
    // 12. SAHIFA YUKLANGANDA VIDEO SLIDER NI ISHGA TUSHIRISH
    setTimeout(() => {
        initVideoSlider();
        
        // Test uchun: Birinchi videoni yuklash
        const firstVideo = videos[0];
        if (firstVideo) {
            firstVideo.load();
        }
        
        console.log('Video Slider muvaffaqiyatli ishga tushirildi!');
    }, 500);
    
    // 13. AUTOPLAY BLOKLANGANLIGINI TEKSHIRISH
    videos.forEach(video => {
        video.muted = true; // Autoplay uchun ovozsiz
        video.play().then(() => {
            video.pause();
            video.currentTime = 0;
            video.muted = false;
        }).catch(err => {
            console.log(`${video.id} autoplay bloklangan`);
            video.muted = false;
        });
    });
    
    // 14. RESIZE EVENT
    window.addEventListener('resize', function() {
        // Slider pozitsiyasini qayta o'rnatish
        goToVideoSlide(currentVideoSlide);
    });
    
    // 15. DEBUG INFORMATION
    console.log('Video Slider tayyor!');
    console.log('Qo\'llanma:');
    console.log('1. Har qanday video ustiga bosing yoki play tugmasini bosing');
    console.log('2. Slider navigatsiyasi uchun chap/o\'ng tugmalar yoki nuqtalarni ishlating');
    console.log('3. Bir video o\'ynaganda, boshqalari avtomatik to\'xtaydi');
});


// ========== PURE JAVASCRIPT IMAGE SLIDER ==========

class ImageSlider {
    constructor() {
        this.sliderContainer = document.querySelector('.slider-container');
        if (!this.sliderContainer) return;
        
        this.sliderTrack = this.sliderContainer.querySelector('.slider-track');
        this.slides = Array.from(this.sliderContainer.querySelectorAll('.slider-slide'));
        this.prevBtn = this.sliderContainer.querySelector('.prev-btn');
        this.nextBtn = this.sliderContainer.querySelector('.next-btn');
        this.dotsContainer = this.sliderContainer.querySelector('.slider-dots');
        this.progressBar = this.sliderContainer.querySelector('.progress-bar');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 4000; // 4 soniyada
        this.isAutoPlaying = true;
        this.progressInterval = null;
        this.slidesPerView = this.getSlidesPerView();
        
        this.init();
    }
    
    // Ekran o'lchamiga qarab slaydlar sonini aniqlash
    getSlidesPerView() {
        if (window.innerWidth < 576) return 1;
        if (window.innerWidth < 992) return 2;
        return 3;
    }
    
    init() {
        console.log('Image Slider ishga tushmoqda...');
        
        // Dots pagination yaratish
        this.createDots();
        
        // Slaydlarni joylashtirish
        this.updateSlidePosition();
        
        // Event listenerlarni qo'shish
        this.addEventListeners();
        
        // Avtomatik aylanishni boshlash
        this.startAutoSlide();
        
        // Progress bar
        this.updateProgressBar();
        
        // Counter yaratish
        this.createCounter();
        
        // Window resize event
        window.addEventListener('resize', () => {
            this.slidesPerView = this.getSlidesPerView();
            this.updateSlidePosition();
        });
        
        console.log('Image Slider muvaffaqiyatli yuklandi!');
    }
    
    // Dots pagination yaratish
    createDots() {
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `dot ${i === this.currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `${i + 1}-rasmga o'tish`);
            dot.dataset.index = i;
            
            dot.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            this.dotsContainer.appendChild(dot);
        }
    }
    
    // Counter yaratish
    createCounter() {
        // Eski counter ni olib tashlash
        const oldCounter = this.sliderContainer.querySelector('.slider-counter');
        if (oldCounter) oldCounter.remove();
        
        const counter = document.createElement('div');
        counter.className = 'slider-counter';
        counter.innerHTML = `
            <i class="fas fa-images"></i>
            <span>${this.currentIndex + 1} / ${this.totalSlides}</span>
        `;
        
        this.sliderContainer.appendChild(counter);
    }
    
    // Counter yangilash
    updateCounter() {
        const counter = this.sliderContainer.querySelector('.slider-counter');
        if (counter) {
            counter.innerHTML = `
                <i class="fas fa-images"></i>
                <span>${this.currentIndex + 1} / ${this.totalSlides}</span>
            `;
        }
    }
    
    // Slayd pozitsiyasini yangilash
    updateSlidePosition() {
        const slideWidth = 100 / this.slidesPerView;
        const translateX = -this.currentIndex * slideWidth;
        
        this.sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Slaydlarni active holatini yangilash
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });
        
        // Dots larni yangilash
        this.updateDots();
        
        // Counter yangilash
        this.updateCounter();
        
        // Progress bar qayta boshlash
        this.updateProgressBar();
    }
    
    // Dots larni yangilash
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    // Progress bar yangilash
    updateProgressBar() {
        if (!this.progressBar) return;
        
        // Eski intervalni tozalash
        clearInterval(this.progressInterval);
        
        // Progress bar ni boshlang'ich holatga qaytarish
        this.progressBar.style.width = '0%';
        
        // Agar auto play ishlamayotgan bo'lsa
        if (!this.isAutoPlaying) return;
        
        // Progress bar animation
        let width = 0;
        const increment = 100 / (this.autoSlideDelay / 100); // Har 0.1 soniyada
        const updateProgress = () => {
            if (width >= 100) {
                width = 0;
                this.nextSlide();
            } else {
                width += increment;
                this.progressBar.style.width = `${width}%`;
            }
        };
        
        this.progressInterval = setInterval(updateProgress, 100);
    }
    
    // Keyingi slaydga o'tish
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlidePosition();
    }
    
    // Oldingi slaydga o'tish
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlidePosition();
    }
    
    // Belgilangan slaydga o'tish
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlidePosition();
    }
    
    // Avtomatik aylanishni boshlash
    startAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
        
        this.isAutoPlaying = true;
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    // Avtomatik aylanishni to'xtatish
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
        
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
        
        this.isAutoPlaying = false;
        this.progressBar.style.width = '0%';
    }
    
    // Event listenerlarni qo'shish
    addEventListeners() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.stopAutoSlide();
                setTimeout(() => this.startAutoSlide(), 5000);
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.stopAutoSlide();
                setTimeout(() => this.startAutoSlide(), 5000);
            });
        }
        
        // Slider container hover
        this.sliderContainer.addEventListener('mouseenter', () => {
            this.stopAutoSlide();
            
            // Counter ni yangilash
            const counter = this.sliderContainer.querySelector('.slider-counter');
            if (counter) {
                counter.innerHTML = `
                    <i class="fas fa-pause" style="color: #ef4444;"></i>
                    <span>To'xtatildi</span>
                `;
            }
        });
        
        this.sliderContainer.addEventListener('mouseleave', () => {
            this.startAutoSlide();
            this.updateCounter();
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.stopAutoSlide();
        });
        
        this.sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
            setTimeout(() => this.startAutoSlide(), 3000);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.stopAutoSlide();
                setTimeout(() => this.startAutoSlide(), 5000);
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.stopAutoSlide();
                setTimeout(() => this.startAutoSlide(), 5000);
            }
        });
        
        // Image click for modal
        this.slides.forEach(slide => {
            const card = slide.querySelector('.image-card');
            if (card) {
                card.addEventListener('click', (e) => {
                    if (!e.target.closest('.slider-btn')) {
                        this.openImageModal(card);
                    }
                });
            }
        });
    }
    
    // Swipe handle
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        
        if (startX - endX > swipeThreshold) {
            // Chapga swipe - next
            this.nextSlide();
        } else if (endX - startX > swipeThreshold) {
            // O'ngga swipe - prev
            this.prevSlide();
        }
    }
    
    // Image modal ochish
    openImageModal(card) {
        const imgSrc = card.querySelector('img').src;
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.card-description').textContent;
        
        // Modal yaratish
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <img src="${imgSrc}" alt="${title}">
                <div class="modal-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Modalni yopish
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        // Modal tashqarisini bosganda
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Escape tugmasi bilan yopish
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        });
        
        // Slider avtomatik aylanishini to'xtatish
        this.stopAutoSlide();
        
        // Modal yopilganda slider qayta ishga tushishi
        modal.addEventListener('click', () => {
            setTimeout(() => this.startAutoSlide(), 1000);
        });
    }
}

// DOM yuklanganda sliderni ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
    // Slider yaratish
    const imageSlider = new ImageSlider();
    
    // Font Awesome iconlarini tekshirish
    if (!document.querySelector('.fa-images')) {
        const style = document.createElement('style');
        style.textContent = `
            .fa-images:before { content: "📷"; }
            .fa-pause:before { content: "⏸"; }
            .fa-chevron-left:before { content: "←"; }
            .fa-chevron-right:before { content: "→"; }
            .fa-calendar:before { content: "📅"; }
            .fa-heart:before { content: "❤️"; }
        `;
        document.head.appendChild(style);
    }
    
    // Rasm yuklash xatolarini ushlash
    document.querySelectorAll('.card-image img').forEach(img => {
        img.addEventListener('error', function() {
            console.error('Rasm yuklanmadi:', this.src);
            this.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';
        });
    });
});