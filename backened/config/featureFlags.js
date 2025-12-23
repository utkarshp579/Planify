export const features = {
  GPT_5_1_CODEX_MAX:
    String(process.env.ENABLE_GPT_5_1_CODEX_MAX).toLowerCase() === "true",
};

export default features;
