import { Access } from "payload/config";

export const isAdminHasSiteAccessOrPublished: Access = ({req: {user}}) => {
    // Need to be logged in
    if (user) {
        // If user has role of 'admin'
        if (user.roles.includes('admin')) return true; 

        // If user has a role of 'editor' and has access to a site, 
        // return a query constraint to restrict the document this user can edit
        // to only those that are assigned to a site, or have no site assigned. 
        if(user.roles.includes('editor') && user.sites?.length > 0) {
            return { 
                or: [
                    {
                        site: {
                            in: user.sites
                        }
                    }, 
                    {
                        site: {
                            exists: false, 
                        }
                    }
                ]
            }
        }
    }

    // Non-logged in users can only read published docs
    return {
        status: {
            equals: 'published'
        }
    }
}