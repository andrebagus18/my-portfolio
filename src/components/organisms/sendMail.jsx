import SendForm from "../molecules/form";
import HeadTitle from "../atoms/headTitle";

function SendMail() {
  return (
    <>
      <div className="mt-20" id="mail">
        <HeadTitle />
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col md:w-lg">
            <SendForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default SendMail;
