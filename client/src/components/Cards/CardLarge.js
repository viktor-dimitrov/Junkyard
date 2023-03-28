export default function CardLarge({
    imageUrl
}) {
    return (
        <article>

            <div>
            <h1>Web Design</h1>
            <img className="largepic" src={imageUrl} alt="car" />
            </div>
   


            <aside className="right">

<h1>Recent Posts</h1>
<ul>
    <li><a href="#">Suspendisse Enim Elit Tempor Acer</a></li>
    <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
    <li><a href="#">Suspendisse Enim Elit Tempor Acer Fermentum Vulputate</a></li>
    <li><a href="#">Mauris Sed Lectus Duieleifend Quis Sem</a></li>
</ul>
<a href="fullwidth.html" className="rm">Read More</a>

</aside>
           
           

            
        </article>
    )
}