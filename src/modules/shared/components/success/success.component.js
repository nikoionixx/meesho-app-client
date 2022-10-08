import RenderIf from "../renderIf/renderIf"

const FormSuccess = ({message}) => {
    console.log(message);
    return (
        <RenderIf isTrue={message}>
                <div className="text-sm w-full py-2 px-3 rounded bg-green-100 text-green-700">
                    {message}
                </div>
        </RenderIf>
    )
}

export default FormSuccess;