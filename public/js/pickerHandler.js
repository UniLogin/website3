import Prism from 'prismjs';
import { ts_ethers_metamask_unilogin, ts_web3_metamask_unilogin, ts_ethers_unilogin, ts_web3_unilogin } from "./configurationData";
import { js_ethers_metamask_unilogin, js_web3_metamask_unilogin, js_ethers_unilogin, js_web3_unilogin } from "./configurationData";

export const optionHandler = (options, callback) => {
    let selectedValue = "";
    for (const option of options) {
        option.addEventListener('click', () => {
            removeSelection(options);
            option.classList.add('active');
            selectedValue = option.getAttribute('data-value');
        });
    };
} 

export const removeSelection = (options) => {
    for (const option of options) {
        option.classList.remove('active');
    }
}

export const getConfiguration = (optionValues) => {
    console.log(optionValues.join(','));
    switch (optionValues.join(',')) {
        case 'TypeScript,Ether.js,Metamask/UniLogin': return ts_ethers_metamask_unilogin;
        case 'TypeScript,web3.js,Metamask/UniLogin': return ts_web3_metamask_unilogin;
        case 'TypeScript,Ether.js,UniLogin': return ts_ethers_unilogin;
        case 'TypeScript,web3.js,UniLogin': return ts_web3_unilogin;
        case 'JavaScript,Ether.js,Metamask/UniLogin': return js_ethers_metamask_unilogin;
        case 'JavaScript,web3.js,Metamask/UniLogin': return js_web3_metamask_unilogin;
        case 'JavaScript,Ether.js,UniLogin': return js_ethers_unilogin;
        case 'JavaScript,web3.js,UniLogin': return js_web3_unilogin;
        default: console.log('none');
    }
}

const getInitialValues = (wrapper) => {
    return wrapper.querySelector('.active').getAttribute('data-value');
}

export const configurationPicker = (languageOptions, libraryOptions, providerOptions, output) => {
    let language = getInitialValues(languageOptions[0].parentElement);
    let library = getInitialValues(libraryOptions[0].parentElement);
    let provider = getInitialValues(providerOptions[0].parentElement); 
    output.innerHTML = Prism.highlight(getConfiguration([language, library, provider]), Prism.languages.javascript, 'javascript');

    for (const item of languageOptions) {
        item.addEventListener('click', () => {
            removeSelection(languageOptions);
            item.classList.add('active');
            language = item.getAttribute('data-value');
            output.innerHTML = Prism.highlight(getConfiguration([language, library, provider]), Prism.languages.javascript, 'javascript'); 
        });
    };

    for (const item of libraryOptions) {
        item.addEventListener('click', () => {
            removeSelection(libraryOptions);
            item.classList.add('active');
            library = item.getAttribute('data-value');
            output.innerHTML = Prism.highlight(getConfiguration([language, library, provider]), Prism.languages.javascript, 'javascript'); 
        });
    };

    for (const item of providerOptions) {
        item.addEventListener('click', () => {
            removeSelection(providerOptions);
            item.classList.add('active');
            provider = item.getAttribute('data-value');
            output.innerHTML = Prism.highlight(getConfiguration([language, library, provider]), Prism.languages.javascript, 'javascript'); 
        });
    };
}

export const managerHandler = (options, output) => {
    for (const option of options) {
        option.addEventListener('click', () => {
            removeSelection(options);
            option.classList.add('active');
            let attrValue = option.getAttribute('data-value');
            if (attrValue === 'CDN') {
                output.innerText = '<script src=”https://unpkg.com/@unilogin/provider”></script>';
            } else {
                output.innerHTML = attrValue;
            }
        });
    };
};