function atualizarSensores() {

    let temperatura = Math.floor(Math.random() * 15) + 20;
    let umidade = Math.floor(Math.random() * 100);
    let acidez = (Math.random() * 14).toFixed(1);

    document.getElementById("temperatura").innerText =
        temperatura + "°C";

    document.getElementById("umidade").innerText =
        umidade + "%";

    if (umidade < 30) {
        document.getElementById("status").innerText =
            "⚠️ Necessita Irrigação";
    } else {
        document.getElementById("status").innerText =
            "✅ Saudável";
    }
    
    if(acidez < 7.0){
        document.getElementById("acidez").innerText = "⚠️solo acido(" + acidez +")";
    } else {
        document.getElementById("acidez").innerText = "Acidez baixa(" + acidez +")"
    }
    document.addEventListener('DOMContentLoaded', function() {
    function initLucide() {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        } else {
            setTimeout(() => {
                if (window.lucide && lucide.createIcons) {
                    lucide.createIcons();
                }
            }, 150);
        }
    }
    initLucide();

    const navItems = document.querySelectorAll('.nav-item');
    
    function removeActiveClasses() {
        navItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    function setActiveItem(activeElement) {
        removeActiveClasses();
        activeElement.classList.add('active');
        
        const activeSvgs = activeElement.querySelectorAll('svg');
        activeSvgs.forEach(svg => {
            svg.style.stroke = '#FFFFFF';
            svg.style.color = '#FFFFFF';
        });
        
        navItems.forEach(item => {
            if (item !== activeElement) {
                const svgs = item.querySelectorAll('svg');
                svgs.forEach(svg => {
                    svg.style.stroke = '#D7D7D7';
                    svg.style.color = '#D7D7D7';
                });
            }
        });
    }
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.classList.contains('active')) return;
            setActiveItem(this);
            
            this.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
    });
    
    const initialActive = document.querySelector('.nav-item.active');
    if (initialActive) {
        const activeSvgs = initialActive.querySelectorAll('svg');
        activeSvgs.forEach(svg => {
            svg.style.stroke = '#FFFFFF';
            svg.style.color = '#FFFFFF';
        });
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .nav-item.active svg,
        .nav-item.active svg *,
        .nav-item.active i {
            stroke: #FFFFFF !important;
            color: #FFFFFF !important;
            fill: none !important;
        }
        
        .nav-item:not(.active) svg,
        .nav-item:not(.active) svg *,
        .nav-item:not(.active) i {
            stroke: #D7D7D7 !important;
            color: #D7D7D7 !important;
        }
        
        .nav-item:not(.active):hover svg,
        .nav-item:not(.active):hover i {
            stroke: #FFFFFF !important;
            color: #FFFFFF !important;
        }
        
        .nav-item svg {
            width: 20px !important;
            height: 20px !important;
            stroke-width: 1.8;
            transition: all 0.2s ease;
        }
        
        @media (max-width: 768px) {
            .nav-item svg {
                width: 18px !important;
                height: 18px !important;
            }
        }
        
        @media (max-width: 580px) {
            .nav-item svg {
                width: 16px !important;
                height: 16px !important;
            }
        }
    `;
    document.head.appendChild(style);
});
}
