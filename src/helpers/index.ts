export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-US', {style: 'currency', currency: 'USD'}).format(amount)
}

export function formatDate(date: Date | string): string {
    if (!(date instanceof Date)) {
      date = new Date(date);  // Intenta convertirlo a Date si es un string
    }
    if (isNaN(date.getTime())) {
      return "Fecha no válida";  // Devuelve un mensaje si la fecha es inválida
    }
    return new Intl.DateTimeFormat('es-MX').format(date);
  }