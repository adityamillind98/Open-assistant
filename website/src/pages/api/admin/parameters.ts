import { withRole } from "src/lib/auth";
import { createApiClient } from "src/lib/oasst_client_factory";

export default withRole("admin", async (_, res, token) => {
  const client = await createApiClient(token);

  try {
    const fullSettings = await client.fetch_full_settings();

    return res.json(fullSettings);
  } catch {
    const publicSettings = await client.fetch_public_settings();

    return res.json(publicSettings);
  }
});
