const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500, id:12,
    imagen:"imagenes/laptop_lenovo.png",
  },
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200, id:123,
     imagen: "imagenes/celular_samsung.png",
  },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300, id:124, 
    imagen:"imagenes/auriculares_jbl.png",
  },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150, id:125, 
    imagen:"imagenes/mouse_logitech.png",
  },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200, id:126,
    imagen: "imagenes/teclado_reddragon.png"
   },
  { nombre: " Iphone 16 Pro Max", categoria: "Tecnología", precio: 2000, id:127,
    imagen: "imagenes/6ae505e3-a852-498c-92a7-3bd40d3d577f.png",
  }]
  
let contenedor2 = document.querySelector("#catalogo");

for (let i = 0; i < productos.length; i++) {
  const { nombre, imagen, precio, categoria } = productos[i];
  contenedor2.innerHTML += `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 m-4">
      <img src="${imagen}" alt="${nombre}" class="w-full h-48 object-contain bg-white p-2">
      <div class="p-5">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
        <p class="text-gray-700 dark:text-gray-400 mt-2">Precio: $${precio}</p>
        <p class="text-gray-700 dark:text-gray-400">Categoría: ${categoria}</p>
        <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  `;
}

