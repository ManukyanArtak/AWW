import Button from '../Button'
import PageConstants from '../../../const'

const FilterButtons = () => (
  <div className={'flex justify-center w-full'}>
    <div className={`flex flex-wrap justify-center max-w-[870px] gap-6 `}>
      <Button
        label={'Հասարակական գործիչ'}
        className={`py-2 px-3  text-base rounded-[20px]  bg-violet-950 text-white `}
      />
      <Button
        label={'Քաղաքականություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
      <Button
        label={'Արվեստ'}
        className={`py-2 px-3  text-base rounded-[20px]  bg-violet-950 text-white `}
      />
      <Button
        label={'Աշխարհագրություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
      <Button
        label={'Գրականություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
      <Button
        label={'Օվկիանոսագետ'}
        className={`py-2 px-3  text-base rounded-[20px]  bg-violet-950 text-white `}
      />
      <Button
        label={'Աստղագիտություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
      <Button
        label={'Աստղագիտություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
      <Button
        label={'Աստղագիտություն'}
        className={`py-2 px-3  text-base rounded-[20px]  text-violet-950 border  border-[#ADADAD] font-[275]`}
      />
    </div>
  </div>
)

export default FilterButtons
