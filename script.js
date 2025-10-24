// script.js

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    
    // 다국어 데이터: 각 페이지의 주요 텍스트를 담고 있습니다.
    const langData = {
        ko: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | 안전한 항해를 위한 당신의 든든한 파트너",
            pageTitleAbout: "회사 소개 | NEO MARITIME SERVICE",
            pageTitleServices: "서비스 | NEO MARITIME SERVICE",
            pageTitleContact: "문의하기 | NEO MARITIME SERVICE",
            // Header & Navigation
            home: "홈",
            about: "회사 소개",
            services: "서비스",
            contact: "문의하기",
            // Hero
            heroTitle: "안전한 항해를 위한 당신의 든든한 파트너",
            heroSubtitle: "글로벌 항해, 멈춤 없는 신뢰. 당신의 든든한 파트너, NEO MARITIME SERVICE.",
            btnService: "서비스 둘러보기",
            btnContact: "문의하기",
            // Why Us
            whyUsTitle: "왜 NEO MARITIME SERVICE인가?",
            whyUsLead: "단순한 공급업체를 넘어 귀사의 신뢰할 수 있는 파트너가 됩니다.",
            whyUsText: "우리는 단순히 제품을 배달하는 것이 아니라, 귀사의 성공적인 항해를 위한 파트너십을 구축합니다. 뛰어난 서비스, 신속한 대응, 그리고 타협 없는 품질로 귀사의 모든 요구를 충족시키기 위해 최선을 다합니다.",
            whyUsButton: "회사 소개",
            // Footer
            menu: "메뉴",
            // Contact Placeholders
            phSelectOffice: "문의 대상 사무소를 선택하세요",
            phName: "이름 또는 선명",
            phEmail: "이메일",
            phMessage: "문의 내용",
            btnSubmit: "보내기",
            // Contact Page Content
            contactHeroTitle: "문의하기",
            contactHeroSubtitle: "무엇이든 문의하세요. 빠르고 신뢰할 수 있는 답변을 약속합니다.",
            contactFormTitle: "문의 양식",
            contactOfficeTitle: "사무소 정보",
            // About Page Content
            aboutHeroTitle: "글로벌 해운을 선도하는 파트너",
            aboutHeroSubtitle: "글로벌 네트워크와 전문성을 통해 선박 보급의 새로운 기준을 제시합니다.",
            managementTitle: "경영진 소개",
            // Services Page Content
            servicesHeroTitle: "최적화된 선박 보급 서비스",
            servicesHeroSubtitle: "파나마와 한국을 잇는 독점 네트워크로 경쟁 우위를 확보하세요.",
            servicesTitle: "주요 서비스",
            ctaTitle: "당신의 다음 항해를 위한 신뢰할 수 있는 파트너",
            ctaLead: "지금 바로 문의하여 최적의 선박 보급 솔루션을 받아보세요.",
            ctaButton: "문의하기",
            // Feature Items (index.html)
            featureQuick: "신속한 대응",
            featureQuickDesc: "현지 네트워크를 바탕으로 신속하고 정확한 공급을 보장합니다.",
            featureQuality: "품질 보증",
            featureQualityDesc: "국제 규격에 부합하는 검증된 제품만을 공급합니다.",
            featureCustomer: "고객 중심",
            featureCustomerDesc: "요구사항에 최적화된 맞춤형 솔루션을 제공합니다.",
        },
        en: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | Your Trusted Partner for a Safe Voyage",
            pageTitleAbout: "About Us | NEO MARITIME SERVICE",
            pageTitleServices: "Services | NEO MARITIME SERVICE",
            pageTitleContact: "Contact Us | NEO MARITIME SERVICE",
            // Header & Navigation
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            // Hero
            heroTitle: "Your Trusted Partner for a Safe Voyage",
            heroSubtitle: "Global voyages, unbroken trust. Your reliable partner, NEO MARITIME SERVICE.",
            btnService: "View Services",
            btnContact: "Contact Us",
            // Why Us
            whyUsTitle: "Why NEO MARITIME SERVICE?",
            whyUsLead: "More than a supplier, we are your reliable partner.",
            whyUsText: "We don't just deliver products; we build partnerships for your successful voyage. We are committed to meeting all your needs with superior service, prompt response, and uncompromising quality.",
            whyUsButton: "About Us",
            // Footer
            menu: "Menu",
            // Contact Placeholders
            phSelectOffice: "Select Contact Office",
            phName: "Name or Vessel Name",
            phEmail: "Email",
            phMessage: "Message",
            btnSubmit: "Submit",
            // Contact Page Content
            contactHeroTitle: "Contact Us",
            contactHeroSubtitle: "Contact us with any query. We promise a quick and reliable response.",
            contactFormTitle: "Contact Form",
            contactOfficeTitle: "Office Information",
            // About Page Content
            aboutHeroTitle: "Leading Partner in Global Shipping",
            aboutHeroSubtitle: "Setting new standards in ship supply through global network and expertise.",
            managementTitle: "Management",
            // Services Page Content
            servicesHeroTitle: "Optimized Ship Supply Services",
            servicesHeroSubtitle: "Gain a competitive edge with our exclusive network connecting Panama and Korea.",
            servicesTitle: "Key Services",
            ctaTitle: "Your Reliable Partner for Your Next Voyage",
            ctaLead: "Contact us today for the optimal ship supply solution.",
            ctaButton: "Contact Us",
            // Feature Items (index.html)
            featureQuick: "Quick Response",
            featureQuickDesc: "We ensure fast and accurate supply based on our local network.",
            featureQuality: "Quality Assurance",
            featureQualityDesc: "We supply only verified products that comply with international standards.",
            featureCustomer: "Customer Focus",
            featureCustomerDesc: "We provide customized solutions optimized for your requirements.",
        },
        es: {
            // Page Titles
            pageTitleHome: "NEO MARITIME SERVICE | Su Socio Confiable para un Viaje Seguro",
            pageTitleAbout: "Sobre Nosotros | NEO MARITIME SERVICE",
            pageTitleServices: "Servicios | NEO MARITIME SERVICE",
            pageTitleContact: "Contacto | NEO MARITIME SERVICE",
            // Header & Navigation
            home: "Inicio",
            about: "Sobre Nosotros",
            services: "Servicios",
            contact: "Contacto",
            // Hero
            heroTitle: "Su Socio Confiable para un Viaje Seguro",
            heroSubtitle: "Viajes globales, confianza inquebrantable. Su socio fiable, NEO MARITIME SERVICE.",
            btnService: "Ver Servicios",
            btnContact: "Contáctenos",
            // Why Us
            whyUsTitle: "¿Por qué NEO MARITIME SERVICE?",
            whyUsLead: "Más que un proveedor, somos su socio confiable.",
            whyUsText: "No solo entregamos productos; construimos alianzas para su viaje exitoso. Estamos comprometidos a satisfacer todas sus necesidades con un servicio superior, respuesta rápida y calidad sin compromisos.",
            whyUsButton: "Sobre Nosotros",
            // Footer
            menu: "Menú",
            // Contact Placeholders
            phSelectOffice: "Seleccionar Oficina de Contacto",
            phName: "Nombre o Nombre del Buque",
            phEmail: "Correo Electrónico",
            phMessage: "Mensaje",
            btnSubmit: "Enviar",
            // Contact Page Content
            contactHeroTitle: "Contáctenos",
            contactHeroSubtitle: "Consúltenos cualquier duda. Prometemos una respuesta rápida y confiable.",
            contactFormTitle: "Formulario de Contacto",
            contactOfficeTitle: "Información de la Oficina",
            // About Page Content
            aboutHeroTitle: "Socio Líder en Transporte Marítimo Global",
            aboutHeroSubtitle: "Estableciendo nuevos estándares en el suministro de buques a través de la red global y experiencia.",
            managementTitle: "Dirección",
            // Services Page Content
            servicesHeroTitle: "Servicios Optimizados de Suministro de Buques",
            servicesHeroSubtitle: "Obtenga una ventaja competitiva con nuestra red exclusiva que conecta Panamá y Corea.",
            servicesTitle: "Servicios Clave",
            ctaTitle: "Su Socio Confiable para Su Próximo Viaje",
            ctaLead: "Contáctenos hoy para la solución óptima de suministro de buques.",
            ctaButton: "Contáctenos",
            // Feature Items (index.html)
            featureQuick: "Respuesta Rápida",
            featureQuickDesc: "Aseguramos un suministro rápido y preciso basado en nuestra red local.",
            featureQuality: "Garantía de Calidad",
            featureQualityDesc: "Suministramos solo productos verificados que cumplen con los estándares internacionales.",
            featureCustomer: "Enfoque en el Cliente",
            featureCustomerDesc: "Proporcionamos soluciones personalizadas optimizadas para sus requisitos.",
        },
    };

    // 언어 적용 함수
    const applyLanguage = (lang) => {
        const dataset = langData[lang];

        // 1. Title 변경
        document.querySelectorAll("[data-translate-title]").forEach(el => {
            const key = el.getAttribute("data-translate-title");
            if (dataset[key]) el.textContent = dataset[key];
        });

        // 2. 텍스트 변경
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            if (dataset[key]) el.textContent = dataset[key];
        });

        // 3. 버튼 텍스트 변경
        document.querySelectorAll("[data-translate-button]").forEach(el => {
            const key = el.getAttribute("data-translate-button");
            if (dataset[key]) el.textContent = dataset[key];
        });

        // 4. Placeholder 변경
        document.querySelector('select[name="officeSelect"]').querySelector('option[disabled]').textContent = dataset.phSelectOffice;
        document.querySelector('input[name="name"]').placeholder = dataset.phName;
        document.querySelector('input[name="email"]').placeholder = dataset.phEmail;
        document.querySelector('textarea[name="message"]').placeholder = dataset.phMessage;
    };

    // 초기 로드 시 저장된 언어 또는 기본값 (한국어) 적용
    const savedLang = localStorage.getItem("selectedLanguage") || "ko";
    if (languageSelect) {
        languageSelect.value = savedLang;
        applyLanguage(savedLang);

        // 언어 변경 이벤트 리스너
        languageSelect.addEventListener("change", (e) => {
            const newLang = e.target.value;
            localStorage.setItem("selectedLanguage", newLang);
            applyLanguage(newLang);
        });
    }

    // --- 홈 페이지 배경 슬라이드 기능 (index.html 전용) ---
    // 1. 배경 사진 파일 이름으로 교체 (resized_1.jpg, resized_2.jpg, resized_3.jpg 사용)
    const heroSection = document.getElementById('home-hero');
    const images = ['resized_1.jpg', 'resized_2.jpg', 'resized_3.jpg']; 
    let currentIndex = 0;

    const changeBackground = () => {
        if (!heroSection) return;

        // 배경 이미지를 직접 스타일로 설정
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;

        currentIndex = (currentIndex + 1) % images.length;
    };

    if (heroSection && images.length > 1) {
        // 초기 배경 설정
        changeBackground();
        // 4초 간격으로 배경 이미지 변경
        setInterval(changeBackground, 4000); 
    }
});