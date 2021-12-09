
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipesService from '../../services/recipesService';
import { useAuthContext } from '../../contexts/AuthContext';

const RecipeDetail = () => {

	const navigate = useNavigate();
    const { user } = useAuthContext();	
    const { recipeId } = useParams();

	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		recipesService.getOne(recipeId)
			.then(x => {
				console.log(x);
				setRecipe(x);
			})
			.catch(err => {
				console.log(err);
			})
	}, [recipeId]);



	let ownerButtons = (
			<div className="col-md-8 col-sm-8">
				<Link to={`/recipe/edit/${recipe._id}`} className="btn btn-default">Edit</Link>
				<Link to="/recipes" className="btn btn-default">Delete</Link>
			</div>
	)

    return (
			
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src={recipe.img} alt="Blog" />
								<h3>{recipe.name}</h3>
								
							</div>
                        </div>
						<div className="col-md-6 col-sm-6">
							<h4> Ingredients </h4>
							<ul>
								{
								recipe.length <= 0
								? null
								: recipe.ingredients.map(x => <li>{x}</li>)
								}
							</ul>
						</div>
						<div className="col-md-6 col-sm-6">
						<h4> Steps </h4>
							<ol>
							{
								recipe.length <= 0
								? null
								: recipe.steps.map(x => <li>{x}</li>)
							}
							</ol>
						</div>
						{ownerButtons}	
                    </div>	
				</div>	
		
					
         )
};

export default RecipeDetail;

