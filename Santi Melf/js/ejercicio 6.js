var par_o_impar = numero
    if (numero % 2 == 0){
        return "El número es par.";
   } else{
        return "El número es impar."
   }
numero = int(input("Ingrese un número entero: "));
resultado = par_o_impar(numero);
print(resultado);
// pepito