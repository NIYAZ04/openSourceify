import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, Save, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { z } from "zod";

const resetPasswordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const { resetPassword, user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Only redirect if auth initialization is finished and no user is found
        if (!loading && !user) {
            toast.error("Invalid or expired session. Please request a new reset link.");
            navigate("/forgot-password");
        }
    }, [user, loading, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const result = resetPasswordSchema.safeParse({ password, confirmPassword });
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as string] = err.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setIsLoading(true);
        const { error } = await resetPassword(password);
        setIsLoading(false);

        if (error) {
            toast.error(error.message || "Failed to reset password");
        } else {
            setIsSuccess(true);
            toast.success("Password changed successfully!");
            setTimeout(() => navigate("/login"), 3000);
        }
    };

    return (
        <Layout>
            <div className="section-container py-16 min-h-[calc(100vh-4rem)]">
                <motion.div
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
                        <p className="text-muted-foreground">
                            Please enter your new password below.
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-8">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                <p className="text-sm font-medium text-muted-foreground animate-pulse">Verifying reset link...</p>
                            </div>
                        ) : isSuccess ? (
                            <div className="text-center py-4">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">Password Updated</h2>
                                <p className="text-muted-foreground mb-8">
                                    Your password has been changed successfully. You will be redirected to login shortly.
                                </p>
                                <Button asChild variant="hero" className="w-full">
                                    <Link to="/login">Login Now</Link>
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="password">New Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-10 pr-10"
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-sm text-destructive">{errors.password}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="pl-10"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                            Updating password...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Save className="w-4 h-4" />
                                            Update Password
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
