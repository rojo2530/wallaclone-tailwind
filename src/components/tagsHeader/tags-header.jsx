import React from 'react';

const TagsHeader = () => (
	<div className="bg-white">
		<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<p className="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
				Categorías
			</p>
			<div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/smartphone2.svg" alt="Mobile"/>
				</div>
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/img/logos/mirage-logo.svg" alt="Mirage"/>
				</div>
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/img/logos/tuple-logo.svg" alt="Tuple"/>
				</div>
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/img/logos/laravel-logo.svg" alt="Laravel"/>
				</div>
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/img/logos/statickit-logo.svg" alt="StaticKit"/>
				</div>
				<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img className="max-h-12" src="/img/logos/statamic-logo.svg" alt="Statamic"/>
				</div>
			</div>
		</div>
	</div>
);

export default TagsHeader;