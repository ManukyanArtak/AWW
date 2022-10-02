import BackdropLayout from '../BackdropLayout'
import Button from '../Button'

const ErrorMessage = ({ onTryClick, onCancelClick }) => (
  <div
    className={` w-[400px] justify-center text-center  bg-white flex flex-col items-center py-5 px-8 rounded-[8px]`}
  >
    <p>Ժամանակավոր խնդիր</p>
    <div className={`mt-5`}>
      <Button
        className={`bg-[#00b5a5] text-white mr-5 w-[120px] rounded-[4px] h-[40px]`}
        label={'Փորձել կրկին'}
        type={'button'}
        onClick={() => onTryClick()}
      />
      <Button onClick={() => onCancelClick()} label={'Չեղարկել'} />
    </div>
  </div>
)

export default BackdropLayout(ErrorMessage)
