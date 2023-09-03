import React from "react";

const OrderCard = ({ order }: any) => {
  return (
    <div className="p-[10px]">
      <div className="flex pb-[30px] items-center justify-start">
        <img src={order?.profile?.pic} className="w-[80px]" alt="orderPic" />

        <div className="pl-3">
          <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
            <p>{order?.profile?.name}</p>
          </div>
          <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
            <p>{order?.profile?.gender}, {new Date(order?.profile?.dob).toLocaleDateString()} </p>
          </div>
          <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
            <p>{order?.profile?.mobile}</p>
          </div>
        </div>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>order id :</p>
        <p>{order?.orderId}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>transaction id :</p>
        <p>{order?.payment?.TransactionNo}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>Billed on :</p>
        <p>{new Date(order?.issued).toLocaleDateString()}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>payment Mode :</p>
        <p>{order?.payment?.mode}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>charges :</p>
        <p>{order?.subtotal}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>tax :</p>
        <p>{order?.totaltax}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>discount :</p>
        <p>- {order?.Discount}</p>
      </div>
      <div className="capitalize w-full flex text-[14px] font-medium pb-[5px] items-center justify-between">
        <p>Total paid :</p>
        <p>{Math.floor(order?.totalamount)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
