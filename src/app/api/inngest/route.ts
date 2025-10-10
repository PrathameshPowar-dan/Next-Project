import { serve } from "inngest/next";
import { inngest } from "@/lib/Inngest/client";
import { sendDailyNewsSummary, sendSignUpEmail } from "@/lib/Inngest/functions";


export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [sendSignUpEmail, sendDailyNewsSummary],
})