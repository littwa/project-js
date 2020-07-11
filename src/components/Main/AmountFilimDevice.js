export default function amountFilimDevice() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    console.log('max-width: 1024px');
    return 9;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    console.log('max-width: 768px');
    return 8;
  }
  return 4;
}
