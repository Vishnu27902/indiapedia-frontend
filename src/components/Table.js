function Table({ data }) {
  const ls = []
  data.map((ele) => ls.push(ele.split(",")))
  return (
    <table border={2} className='border border-black mt-5 mb-5 ml-10 mr-10'>
      {
        ls.map((ele, ind) => {
          if (!ind) {
            return (
              <tr className='p-0 border border-black '>
                {
                  ele.map((inner) => {
                    return <td className='text-center font-extrabold border border-black'>{inner}</td>
                  })
                }
              </tr>
            )
          }
          else {
            return (
              <tr className='p-0 border border-black'>
                {
                  ele.map((inner) => {
                    return <td className='border border-black'>{inner}</td>
                  })
                }
              </tr>
            )
          }
        })
      }
    </table>
  )
}

export default Table