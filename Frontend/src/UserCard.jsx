const UserCard=({user})=>{
    return(
        <div className="bg-white rounded-lg shadow-md p-4 flex gap-4 items-center">
            {user.avatar?(<img src={user.avtar} alt={user.name} className="w-20 h-20 rounded-full"/>):(<div className="w-20 h-20 bg-red-400 text-white flex  items-center justify-center text-xl rounded-full">
                {user.name.split(' ').map(n=>n[0]).join('')}
            </div>)}
            <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.address}</p>
                <p>{user.phone}</p>
                <a href={`https:\\${user.website}`} target="_blank" rel="norefference" className="text-blue-500">{user.website}</a>
                <p className="font-semibold mt-1">{user.company}</p>
            </div>
        </div>
    )
}
export default UserCard;