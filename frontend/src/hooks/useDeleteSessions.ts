import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SESSIONS } from "./useSessions";
import { deleteSession } from "../lib/api";

interface Session {
  _id: string;
 
}

const useDeleteSession = (sessionId: string) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: () => deleteSession(sessionId),
    onSuccess: () => {
      queryClient.setQueryData<Session[]>([SESSIONS], (cache = []) =>
        (cache as Session[]).filter((session) => session._id !== sessionId)
      );
    },
  });

  return { deleteSession: mutate, ...rest };
};

export default useDeleteSession;
