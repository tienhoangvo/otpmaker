const generateOTP = (n: number) => Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('')
export default generateOTP