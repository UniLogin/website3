import {dropdown} from './dropdown';
(() => {
    let managerDropdown = document.getElementById("start__select_manager");
    let managerOptionWrapper = document.getElementById("start__select_options_manager");
    let managerOptions = document.querySelectorAll(".option_manager");
    let managerOutput = document.getElementById("start__code_manager");
    let managerPlaceholder = document.getElementById("start__placeholder_manager");
    let managerIcon = document.getElementById("start__icon_manager");
    let libraryDropdown = document.getElementById("start__select_library");
    let libraryOptionWrapper = document.getElementById("start__select_options_library");
    let libraryOptions = document.querySelectorAll(".option_library");
    let libraryOutput = document.getElementById("start__code_library");
    let libraryPlaceholder = document.getElementById("start__placeholder_library");
    let libraryIcon = document.getElementById("start__icon_library");
    dropdown(managerDropdown, managerPlaceholder, managerOptionWrapper, managerOptions, managerOutput, managerIcon);
    dropdown(libraryDropdown, libraryPlaceholder, libraryOptionWrapper, libraryOptions, libraryOutput, libraryIcon);
})();