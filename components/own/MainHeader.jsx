import logo from '../../src/assets/coin.png'
import info from '../../src/assets/info.png'
import bell from '../../src/assets/bell.png'
import user from '../../src/assets/user.png'
export default function MainHeader() {
    return(
        <div className="p-6 flex w-full h-[10vh] justify-between mb-2">
            <span className="w-15"> 
                <img src={logo} alt="Logo" />
            </span>
            <div className='flex w-1/4 items-center gap-2'>
                <button className='!bg-transparent w-1/5'><img src={info} alt="" /></button>
                <button className='!bg-transparent w-1/5'><img src={bell} alt="" /></button>
                <button className='!bg-transparent w-1/4'><img className="rounded-full outline-3 outline-pink-400" src={user} alt="" /></button>
                <div className='flex flex-col w-1/2 justify-center'>
                    <p>Hi, User!</p>
                    <p>Welcome Back</p>
                </div>
            </div>
        </div>
    )
}