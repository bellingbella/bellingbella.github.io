const searchParams = new URLSearchParams(window.location.search);
const tabRoute = document.querySelectorAll('.tab-route');
const redirectionTab = document.querySelectorAll('[redirection]');
const tabContent = document.getElementById('tab_content');

// Initialization
const tab = searchParams.get('tab');

function searchTabRoute(routeName) {
    for (let i = 0; i < tabRoute.length; i++) {
        const tabRouteName = tabRoute[i].getAttribute('route');
        
        if (tabRouteName == routeName) {
            
            return tabRoute[i];
        }
    }
    return null;
}

function setUsedTab(routeName) {
    for (let i = 0; i < redirectionTab.length; i++) {
        const redirectionTabRoute = redirectionTab[i].getAttribute('redirection');
        if (redirectionTabRoute == routeName) {
            redirectionTab[i].classList.add('selected-tab');
        }
    }
        
}

let defaultTab = 'home';
if (tab == null || tab == defaultTab) {
    const defaultTabElement = searchTabRoute(defaultTab);
    if (defaultTabElement) {
       
        tabContent.innerHTML = defaultTabElement.innerHTML;
    }
}

if (tab == 'contact') {
    const defaultTabElement = searchTabRoute(tab);
    if (defaultTabElement) {
        tabContent.innerHTML = defaultTabElement.innerHTML;
    }
}

if (tab == 'donation') {
    const defaultTabElement = searchTabRoute(tab);
    if (defaultTabElement) {
        tabContent.innerHTML = defaultTabElement.innerHTML;
    }
}

setUsedTab((tab == null) ? defaultTab : tab);

// redirection

redirectionTab.forEach(tab => {
    tab.addEventListener('click', () => {
        const redirectionTabRoute = tab.getAttribute('redirection');
        window.location.href = `?tab=${redirectionTabRoute}`;
    });
});