import React from 'react';
import TagHeader from "../tag-header/tag-header-component";

const tags = ['mobile', 'work', 'lifestyle', 'motor']

const TagsHeader = () => (
	<div className="bg-white">
		<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

				<div>
					<h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
						World's Largest Classifieds Portal
					</h2>
					<p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
						Search from over 15000 Classfieds & Post
					</p>
				</div>

				<div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
					{tags.map(tag => (
						<TagHeader
							key={tag}
							image="https://tailwindui.com/img/logos/transistor-logo.svg"
							alt="Workcation"
						/>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default TagsHeader;