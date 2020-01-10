(() => {
    let providerSelect = document.getElementById("providerSelect");
    let providerOutput = document.getElementById("providerOutput");
    providerSelect.onchange = () => {
        providerOutput.innerText = providerSelect.value;
    }
})();