import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";

export default function TermsOfService() {
    return (
        <Layout>
            <div className="section-container py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-teal">
                            <FileText className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-4xl font-bold">Terms of Service</h1>
                    </div>

                    <div className="glass-card rounded-2xl p-8 space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Platform Usage</h2>
                            <p>
                                OpenSourceify is a community-driven platform for discovering and sharing open-source projects. By using our service, you agree to act in good faith and respect the contributions of others.
                            </p>
                        </section>

                        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Content Removal Policy</h2>
                            <p className="text-foreground font-medium mb-4">
                                If you find any project which you want not to be here kindly inform us then we will remove it.
                            </p>
                            <p>
                                Some projects were pushed by the developer of OpenSourceify initially for people to understand the platform. If that project is yours, you can ask for it to be removed immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Developer Responsibility</h2>
                            <p>
                                Users are responsible for the content they publish. Ensure you have the rights to share any project or code you push to the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Service Availability</h2>
                            <p>
                                We strive to maintain high availability but do not guarantee uninterrupted service. We reserve the right to modify or discontinue features as the platform evolves.
                            </p>
                        </section>

                        <p className="text-sm border-t border-border/50 pt-8">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
