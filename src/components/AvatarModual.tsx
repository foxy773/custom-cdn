import Img1 from '../assets/images/avatar.png';

export function AvatarModual() {
  return (
    <div className="h-full w-full flex items-end col-span-2 flex-col justify-between">
      <div className="bg-gray-700 p-1 rounded-bl-md">
        <p>Close X</p>
      </div>
      <img
        className="h-full w-full  bg-cover bg-no-repeat bg-bottom object-cover "
        src={Img1}
        alt="Avatar"
      />
    </div>
  );
}
