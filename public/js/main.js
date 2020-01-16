import { companiesSlider } from './companiesSlider.js';

(() => {
    let providerSelect = document.getElementById("start__select");
    let providerOutput = document.getElementById("start__code");
    let providerOptions = document.getElementById("start__select_options");
    let providerPlaceholder = document.querySelector('.start__select_text');
    let providerSelectIcon = document.querySelector('.start__select_icon');
    let providerIsShown = false;

    console.log(providerPlaceholder);

    providerSelect.onclick = () => {
        togleProviderShown();
    }

    document.addEventListener('click', event => {
        let isClickInside = providerSelect.contains(event.target);
        // isClickOptionsBody = (event.target.id == 'start__select_options');
        if(!isClickInside) {
            closeOptions();
        }
    });

    const options = document.querySelectorAll(".start__select_option");

    for (const option of options) {
        option.addEventListener("click", () => {
            let selectedOption = document.querySelector('.selected');
            if (!option.classList.contains('selected')) {
                selectedOption.classList.remove('selected');
                option.classList.add('selected');
                providerOutput.innerText = option.getAttribute("data-value");
                providerPlaceholder.innerText = option.innerText;
                console.log(option.innerText);
            } else {
            }
        });
    }

    const togleProviderShown = () => {
        if(!providerIsShown) {
            showOptions();
        } else {
            closeOptions();
        }
    }

    const showOptions = () => {
        providerIsShown = true;
        providerOptions.classList.add('class', 'isShown');
        providerSelectIcon.classList.add('reversed-icon');
    }

    const closeOptions = () => {
        providerIsShown = false;
        providerOptions.classList.remove('class', 'isShown');
        providerSelectIcon.classList.remove('reversed-icon');
    }

    const browser1 = document.querySelector('.browser_1');
    const onScroll = () => {
        // console.log(window.scrollY)
        const browser1Top = browser1.offsetTop;
        const browser1Height = browser1.offsetHeight;

        // console.log(window.scrollY + browser1Height / 2)
        
        if(window.scrollY + window.innerHeight >= browser1Top + browser1Height / 2 ) {
            // console.log('browser')
        }        
    }
    
    window.addEventListener('scroll', onScroll)
})();