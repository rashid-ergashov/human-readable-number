module.exports = function toReadable(number) {

  const array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const zero = 'zero'

  const strUmber = number.toString()
  const numswhole = number / 10
  let result = null
  if (number >= 1 && number < 20) {
    for (let i = 0; i < array.length; i++) {
      if (number === i + 1) {
        result = array[number - 1]
        console.log(result);
        return result
      }
    }

  } else if (number >= 20 && number < 100) {
    for (let i = 0; i < numbers.length; i++) {

      if (number % 10 === 0) {
        result = numbers[(number / 10) - 2]
        console.log(result);
        return result
      } else {

        const ext = parseInt(strUmber.at(-1))
        const res = Math.floor(numswhole)

        numbers[res]
        result = `${numbers[res - 2]} ${array[ext - 1]}`
        console.log(result);
        return result
      }

    }



  } else if (number >= 100 && number < 1000) {
    const hundredone = +strUmber.at()
    const hundredtwo = +strUmber.at(1)
    const hundredthree = +strUmber.at(2)
    const sumTwoNumber = strUmber.at(1) + strUmber.at(2)

    if (number % 100 === 0) {
      result = `${array[number / 100 - 1]}${' '}${'hundred'}`
      console.log(result);
      return result
    }
    else if (hundredtwo === 1) {

      result = `${array[hundredone - 1]}${' '}${'hundred'}${' '}${array[+sumTwoNumber - 1]}`
      console.log(result);
      return result


    } else if (hundredtwo > 1) {
      result = `${array[hundredone - 1]}${' '}${'hundred'}${' '}${numbers[hundredtwo - 2]}${' '}${array[hundredthree - 1]}`
      console.log(result);
      if (hundredtwo > 1 && hundredthree === 0) {
        result = `${array[hundredone - 1]}${' '}${'hundred'}${' '}${numbers[hundredtwo - 2]}`
        console.log(result);
        return result
      }

      return result

    } else if (hundredtwo === 0) {
      result = `${array[hundredone - 1]}${' '}${'hundred'}${' '}${array[hundredthree - 1]}`
      console.log(result);
      return result

    }
  } else if (number <= 0) {
    result = zero
    console.log(result);
    return result
  }

}




