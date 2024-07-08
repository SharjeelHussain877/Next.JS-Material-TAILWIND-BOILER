import "./css/card.css";
import React, { useMemo } from "react";
import Modal from "./Modal";
import ProcessModal from "./ProcessModal";

function Card({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => setOpen(!open);

  return (
    <div class="card nunito">
      <div class="icon">{data?.icon}</div>
      <strong> {data?.title}</strong>

      <div class="card__body nunito">
        {`Congrats! you've completed ${
          data ? data.message : "module missing"
        } module.`}
        <br />
        <div className="w-full item-start flex pt-4 ml-6">
        {
          data?.status == "failed" && (
            <button className="bg-red-100 text-red-900 capitilize !self-start rounded-md text-xs px-3 pb-[1px] h-4 font-semibold">
            Failed
          </button>
          )
        }
        {
          data?.status == "passed" && (
            <button className="bg-green-100 text-green-900 capitilize !self-start rounded-md text-xs px-3 pb-[1px] h-4 font-semibold">
            Passed
          </button>
          )
        }
        {
          data?.status == "enrolled" && (<button className="bg-[#DEF1F7] text-[#1D657D] capitilize !self-start rounded-md text-xs px-3 pb-[1px] h-4 font-semibold">
            enrolled
          </button>)
        }
          
          
         
        </div>
      </div>
       {
          data?.status == "passed" && (<>
             <span className="bg-[#88C343]" onClick={() => handleOpen(data?.id)}>View certificate</span>
             <Modal open={open} handleOpen={handleOpen} data={data} />
          </>)
        }
       {
          data?.status == "failed" && (<>
             <span className="bg-red-500" onClick={() => handleOpen(data?.id)}>You are Failed</span>
             {/* <Modal open={open} handleOpen={handleOpen} data={data} /> */}
          </>)
        }
       {
          data?.status == "enrolled" && (<>
             <span className="bg-[#0B73B7]" onClick={() => handleOpen(data?.id)}>Claim Your Certificate</span>
             <ProcessModal open={open} handleOpen={handleOpen} data={data} />
          </>)
        }
      {/* <span onClick={() => handleOpen(data?.id)}>View certificate</span>
      <Modal open={open} handleOpen={handleOpen} data={data} /> */}
    </div>
  );
}

export default Card;
