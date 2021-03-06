import { supabase } from '$lib/db/supabaseClient';
import { getUser } from '$lib/db/user';
import type { User } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request }) => {
    supabase.auth.api.getUserByCookie(request)
    let user: User
    try {
        user = await getUser(supabase.auth.user().id)
    }
    catch (e) {
        console.log(e.message)
    }
    return {
        status: 303,
        message: 'You got the user',
        body: {
            user
        }
    };
};