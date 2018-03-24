/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradle.internal.operations;

import javax.annotation.Nullable;

public interface BuildOperationContext {
    /**
     * Marks the build operation as failed, without throwing an exception out of the operation.
     *
     * If called with non-null, will suppress any exception thrown by the operation being used as the operation failure.
     *
     * @param failure Can be null, in which case this method does nothing.
     */
    void failed(@Nullable Throwable failure);

    void setResult(Object result);

    /**
     * Record a status or outcome for given build operation.
     *
     * @param status operation status
     * @since 4.0
     */
    void setStatus(String status);
}
