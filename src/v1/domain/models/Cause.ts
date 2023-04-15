import { prisma } from '../../lib/prisma';

export interface Cause {
	id: string;
	title: string;
	description: string;
}
