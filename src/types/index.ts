export type TMeta = {
	page: number;
	limit: number;
	total: number;
};

export type TResponseSuccess = {
	success?: boolean;
	message?: string;
	data: any;
	meta?: TMeta;
};

export type TGenericErrorResponse = {
	success: boolean;
	statusCode: number;
	message: string;
	errorMassages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
	path: string | number;
	message: string;
};

export type TQueryParams = {
	name: string;
	value: string;
};

export type TProfile = {
	name: string;
	designation: string;
	introduction: string;
	profilePicture: string;
	frontEndSkills: string;
	backEndSkills: string;
	tools: string[];
	socialLinks: {
		linkedin: string;
		github: string;
		x: string;
		facebook: string;
		youtube: string;
	};
	contact: {
		phone: string;
		email: string;
	};
	resumeLink: string;
};
