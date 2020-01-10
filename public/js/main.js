(() => {
    let providerSelect = document.getElementById("providerPicker");
    let providerOutput = document.getElementById("providerOutput");
    providerSelect.onchange = () => {
        providerOutput.innerText = providerSelect.value;
    }
})();