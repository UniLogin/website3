export const dropdown = (dropdown, placeholder, optionsWrapper, options, output, icon) => {
    let dropdownIsShown = false;
    document.addEventListener('click', event => {
        let isClickInside = dropdown.contains(event.target);
        if(!isClickInside) {
            closeOptions();
        }
    });

    dropdown.onclick = () => {
        togleProviderShown();
    };

    for (const option of options) {

        option.addEventListener("click", () => {
            let selectedOption = optionsWrapper.querySelector('.selected');
            if (!option.classList.contains('selected')) {
                selectedOption.classList.remove('selected');
                option.classList.add('selected');
                output.innerHTML = option.getAttribute("data-value");
                placeholder.innerText = option.innerText;
            } else {
            }
        });
    };

    const togleProviderShown = () => {
        if(!dropdownIsShown) {
            showOptions();
        } else {
            closeOptions();
        }
    };

    const showOptions = () => {
        dropdownIsShown = true;
        optionsWrapper.classList.add('class', 'isShown');
        icon.classList.add('reversed-icon');
    };
    
    const closeOptions = () => {
        dropdownIsShown = false;
        optionsWrapper.classList.remove('class', 'isShown');
        icon.classList.remove('reversed-icon');
    }
};

