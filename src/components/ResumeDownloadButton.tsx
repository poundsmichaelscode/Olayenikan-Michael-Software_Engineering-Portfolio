import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeDownloadButtonProps {
  url?: string;
  filename?: string;
}

const ResumeDownloadButton = ({
  url = "/Olayenikan_Michael_Full_Stack_Developer_Resume.pdf",
  filename = "Olayenikan-Michael-Resume.pdf",
}: ResumeDownloadButtonProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "downloading" | "done">("idle");

  const handleDownload = async () => {
    if (status !== "idle") return;
    setStatus("downloading");
    setProgress(0);

    try {
      const response = await fetch(url);
      if (!response.ok || !response.body) throw new Error("Failed to fetch resume");

      const contentLength = Number(response.headers.get("Content-Length")) || 0;
      const reader = response.body.getReader();
      const chunks: Uint8Array[] = [];
      let received = 0;

      // Fallback fake progress when content-length is unknown
      let fakeTimer: number | undefined;
      if (!contentLength) {
        fakeTimer = window.setInterval(() => {
          setProgress((p) => (p < 90 ? p + 5 : p));
        }, 120);
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          received += value.length;
          if (contentLength) {
            setProgress(Math.min(99, Math.round((received / contentLength) * 100)));
          }
        }
      }

      if (fakeTimer) window.clearInterval(fakeTimer);
      setProgress(100);

      const blob = new Blob(chunks as BlobPart[], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);

      setStatus("done");
      setTimeout(() => {
        setStatus("idle");
        setProgress(0);
      }, 2500);
    } catch (e) {
      console.error(e);
      setStatus("idle");
      setProgress(0);
    }
  };

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      <Button
        variant="ghost"
        size="lg"
        onClick={handleDownload}
        disabled={status === "downloading"}
        aria-label="Download resume"
      >
        {status === "done" ? (
          <>
            <CheckCircle className="mr-1" />
            Downloaded
          </>
        ) : status === "downloading" ? (
          <>
            <Download className="mr-1 animate-pulse" />
            Downloading… {progress}%
          </>
        ) : (
          <>
            <Download className="mr-1" />
            Resume
          </>
        )}
      </Button>

      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-1.5 rounded-full bg-muted overflow-hidden origin-left"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDownloadButton;
