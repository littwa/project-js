export default function amountFilimDevice() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    return 9;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    return 8;
  }
  return 4;
}
