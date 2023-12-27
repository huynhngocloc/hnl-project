export function numberFormat(value, locale = 'en-US'){
    return value.toLocaleString(locale);
}

export  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };