let total = 2000;
let factura = document.querySelector("#factura");
let boton = document.querySelector("#boton");

//

function descuento() {
  if (total > 1000) {
    total = (total / 100) * 90;
  }
  return total;
}
descuento();

boton.addEventListener("click", function () {
  factura.innerHTML = `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    ${total}
                </td>
            </tr>`;
});
