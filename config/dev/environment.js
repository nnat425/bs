'use strict';
// const defaults = require( '../defaults' );
import { defaults } from '../defaults';
const SDMPaths = require( '../../data/sdm/paths.json' );
const SDMURL = defaults.https + 'dp-portal-dev1.' + defaults.base;

const environment = {
	sdm: {
		default: SDMURL,
		student: SDMURL + SDMPaths.login.student,
		staff: SDMURL + SDMPaths.login.staff,
		credentials: {
			student: {
				username: 'nsgrak2test3@gmail.com',
				password: 'password1'
			}
		}
	}
};


exports.environment = environment;
