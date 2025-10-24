import UserCard from UserCard
function Button({text ="Submit", color = "green"}) {
    return(
        <Button style={{backgroundColor: color}}>{text}</Button>
    )

}