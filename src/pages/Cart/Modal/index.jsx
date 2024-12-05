const ModalPlaceOrder = () => {
  return (
    <div className='p-7 border border-solid border-[#77be1d] rounded-3xl w-80'>
        <p className='font-fontFamily font-bold text-xl text-center text-white'>5 товаров</p>
        <h1 className='font-fontFamily font-semibold text-4xl text-center text-white my-6'>4 999 </h1>
        <button className='w-full py-5 bg-green rounded-2xl font-fontFamily font-semibold text-lg text-white'>Оформить заказ</button>
        <p className='mt-8 font-fontFamily font-medium text-base text-clear'>Покупая данный товар, я подтверждаю,что ознакомился и согласен с <span className='text-[#4885fc] cursor-pointer'>условиями</span> и <span className='text-[#4885fc] cursor-pointer'>условия магазина</span></p>
    </div>
  )
}

export default ModalPlaceOrder