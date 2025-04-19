import { z } from "zod";

const updateAdmin = z.object({
    body:z.object({
        name:z.string().optional(),
        contact_number:z.string().optional()
    })
})

export default updateAdmin
